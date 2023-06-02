import React, { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { useReactToPrint } from "react-to-print";



const EmpDetail = () => {
    const conponentPDF = useRef();
    const { id } = useParams();
    const [empdata, empdatachange] = useState({});


    useEffect(() => {
        fetch("https://api.terracemenus.com/api/salaries52023/" + id).then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    const generatePDF = useReactToPrint({
        content: () => conponentPDF.current,
        documentTitle: `Saraly${Math.floor((Math.random() * 10000000) + 1)}`,
    });
    return (
        <div>
            <div className=" container d-grid d-md-flex justify-content-md-end pt-5">
                <button className="btn btn-success" onClick={generatePDF}>حفظ</button>
            </div>
            <div ref={conponentPDF} className="container p-3">
                <div className="card pt-3 row" style={{ "textAlign": "left" }}>
                    {empdata &&
                        <React.Fragment>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div style={{ width: '100%', fontSize: 12 }}>
                                            <div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <table class="table table-borderless table-sm text-end">
                                                            <tr>
                                                                <td></td>
                                                                <th>شركة مصر للأسواق الحرة</th>
                                                            </tr>
                                                            <tr>
                                                                <td>{empdata.sector}</td>
                                                                <th>/القطاع</th>
                                                            </tr>
                                                            <tr>
                                                                <td>{empdata.administration}</td>
                                                                <th>/الادارة</th>
                                                            </tr>
                                                            <tr>
                                                                <td>{empdata.employee_code}</td>
                                                                <th>/كود</th>
                                                            </tr>
                                                            <tr>
                                                                <td>{empdata.employee_name}</td>
                                                                <th>/الأسم</th>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <table class="table table-borderless table-sm text-end">
                                                            <tr>
                                                                <td>{empdata.month}</td>
                                                                <th>بيان بمفردات مرتب شهر</th>
                                                            </tr>
                                                            <tr>
                                                                <td>{empdata.public_admin}</td>
                                                                <th>/الأدارة العامة</th>
                                                            </tr>
                                                            <tr>
                                                                <td>{empdata.job_position}</td>
                                                                <th>/الوظيفة</th>
                                                            </tr>
                                                            <tr>
                                                                <td>{empdata.financial_degree}</td>
                                                                <th>/الدرجة</th>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <table class="table table-bordered table-sm text-center">
                                                            <thead>
                                                                <tr>
                                                                    <th>ع.ج.إضافية</th>
                                                                    <th>ع.إجتماعية</th>
                                                                    <th>ع.خاصة</th>
                                                                    <th>ع.مضمومة</th>
                                                                    <th>الاساسى</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>{empdata.extra_bonus}</td>
                                                                    <td>{empdata.social_bonus}</td>
                                                                    <td>{empdata.special_bonus}</td>
                                                                    <td>{empdata.guaranteed_bonus}</td>
                                                                    <td>{empdata.basic}</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <table class="table table-bordered table-sm text-center">
                                                            <thead>
                                                                <tr>
                                                                    <th>أ.الحافز</th>
                                                                    <th>أ.المرتب</th>
                                                                    <th>ع.متغير ة</th>
                                                                    <th>ب.مرجح</th>
                                                                    <th>ع.موحده</th>
                                                                    <th>ب.موحد</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>{empdata.bonus_a}</td>
                                                                    <td>{empdata.salary_a}</td>
                                                                    <td>{empdata.variable_bonus}</td>
                                                                    <td>{empdata.likely_b}</td>
                                                                    <td>{empdata.unified_bonus}</td>
                                                                    <td>{empdata.unified_b}</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* start */}
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <table class="table table-bordered table-sm text-center">
                                                        <thead>
                                                            <tr hidden={!empdata.basic_salary || empdata.basic_salary === '0'}>
                                                                <td>{empdata.basic_salary}</td>
                                                                <th>اساسى الراتب</th>
                                                            </tr>
                                                            <tr hidden={!empdata.bonus || empdata.bonus === '0'}>
                                                                <td>{empdata.bonus}</td>
                                                                <th>الحافز</th>
                                                            </tr>
                                                            <tr hidden={!empdata.extra_pay || empdata.extra_pay === '0'}>
                                                                <td>{empdata.extra_pay}</td>
                                                                <th>اجر اضافى</th>
                                                            </tr>
                                                            <tr hidden={!empdata.alienation_allowance || empdata.alienation_allowance === '0'}>
                                                                <td>{empdata.alienation_allowance}</td>
                                                                <th>بدل اغتراب</th>
                                                            </tr>
                                                            <tr hidden={!empdata.transfer_allowance_security || empdata.transfer_allowance_security === '0'}>
                                                                <td>{empdata.transfer_allowance_security}</td>
                                                                <th>بدل انتقال - امن</th>
                                                            </tr>
                                                            <tr hidden={!empdata.fixed_transfer_allowance || empdata.fixed_transfer_allowance === '0'}>
                                                                <td>{empdata.fixed_transfer_allowance}</td>
                                                                <th>بدل انتقال ثابت</th>
                                                            </tr>
                                                            <tr hidden={!empdata.fixed_representation_allowance || empdata.fixed_representation_allowance === '0'}>
                                                                <td>{empdata.fixed_representation_allowance}</td>
                                                                <th>بدل تمثيل ثابت</th>
                                                            </tr>
                                                            <tr hidden={!empdata.garage_allowance || empdata.garage_allowance === '0'}>
                                                                <td>{empdata.garage_allowance}</td>
                                                                <th>بدل جراج</th>
                                                            </tr>
                                                            <tr hidden={!empdata.effort_allowance || empdata.effort_allowance === '0'}>
                                                                <td>{empdata.effort_allowance}</td>
                                                                <th>بدل جهد</th>
                                                            </tr>


                                                            <tr hidden={!empdata.effort_allowance_security || empdata.effort_allowance_security === '0'}>
                                                                <td>{empdata.effort_allowance_security}</td>
                                                                <th>بدل جهد - امن</th>
                                                            </tr>
                                                            <tr hidden={!empdata.extra_effort_allowance || empdata.extra_effort_allowance === '0'}>
                                                                <td>{empdata.extra_effort_allowance}</td>
                                                                <th>بدل جهد اضافى</th>
                                                            </tr>
                                                            <tr hidden={!empdata.costume_allowance || empdata.costume_allowance === '0'}>
                                                                <td>{empdata.costume_allowance}</td>
                                                                <th>بدل زى</th>
                                                            </tr>
                                                            <tr hidden={!empdata.travel_allowance_inside_theRepublic || empdata.travel_allowance_inside_theRepublic === '0'}>
                                                                <td>{empdata.travel_allowance_inside_theRepublic}</td>
                                                                <th>بدل سفر - داخل الجمهوريه</th>
                                                            </tr>
                                                            <tr hidden={!empdata.instead_of_thenature_of_work || empdata.instead_of_thenature_of_work === '0'}>
                                                                <td>{empdata.instead_of_thenature_of_work}</td>
                                                                <th>بدل طبيعه عمل</th>
                                                            </tr> <tr hidden={!empdata.work_nature_allowance_doctors || empdata.work_nature_allowance_doctors === '0'}>
                                                                <td>{empdata.work_nature_allowance_doctors}</td>
                                                                <th>بدل طبيعه عمل - اطباء</th>
                                                            </tr> <tr hidden={!empdata.work_nature_allowance_computer_sector || empdata.work_nature_allowance_computer_sector === '0'}>
                                                                <td>{empdata.work_nature_allowance_computer_sector}</td>
                                                                <th>بدل طبيعه عمل - قطاع حاسب الى</th>
                                                            </tr>


                                                            <tr hidden={!empdata.Instead_of_thenature_of_the_director_general_of_security || empdata.Instead_of_thenature_of_the_director_general_of_security === '0'}>
                                                                <td>{empdata.Instead_of_thenature_of_the_director_general_of_security}</td>
                                                                <th>بدل طبيعه مدير عام الامن</th>
                                                            </tr>
                                                            <tr hidden={!empdata.remote_areas_allowance || empdata.remote_areas_allowance === '0'}>
                                                                <td>{empdata.remote_areas_allowance}</td>
                                                                <th>بدل مناطق نائيه</th>
                                                            </tr>
                                                            <tr hidden={!empdata.travel_tickets_internal || empdata.travel_tickets_internal === '0'}>
                                                                <td>{empdata.travel_tickets_internal}</td>
                                                                <th>تذاكر سفر - داخلى</th>
                                                            </tr>
                                                            <tr hidden={!empdata.travel_tickets_expatriates || empdata.travel_tickets_expatriates === '0'}>
                                                                <td>{empdata.travel_tickets_expatriates}</td>
                                                                <th>تذاكر سفر - مغتربى الفروع الخارجيه</th>
                                                            </tr>
                                                            <tr hidden={!empdata.extraordinary_effort_safe || empdata.extraordinary_effort_safe === '0'}>
                                                                <td>{empdata.extraordinary_effort_safe}</td>
                                                                <th>جهد غير عادى - امن</th>
                                                            </tr>
                                                            <tr hidden={!empdata.extraordinary_effort_sale_exhibitions || empdata.extraordinary_effort_sale_exhibitions === '0'}>
                                                                <td>{empdata.extraordinary_effort_sale_exhibitions}</td>
                                                                <th>جهد غير عادى - معارض بيع</th>
                                                            </tr>


                                                            <tr hidden={!empdata.extraordinary_effort_departments || empdata.extraordinary_effort_departments === '0'}>
                                                                <td>{empdata.extraordinary_effort_departments}</td>
                                                                <th>جهد غير عادى-ادارات</th>
                                                            </tr>
                                                            <tr hidden={!empdata.extra_incentive_trill || empdata.extra_incentive_trill === '0'}>
                                                                <td>{empdata.extra_incentive_trill}</td>
                                                                <th>حافز اضافى تريله</th>
                                                            </tr>
                                                            <tr hidden={!empdata.bendrol_stimulus || empdata.bendrol_stimulus === '0'}>
                                                                <td>{empdata.bendrol_stimulus}</td>
                                                                <th>حافز بندرول</th>
                                                            </tr>
                                                            <tr hidden={!empdata.selling_incentive || empdata.selling_incentive === '0'}>
                                                                <td>{empdata.selling_incentive}</td>
                                                                <th>حافز بيعى</th>
                                                            </tr>
                                                            <tr hidden={!empdata.two_cycle_incentive || empdata.two_cycle_incentive === '0'}>
                                                                <td>{empdata.two_cycle_incentive}</td>
                                                                <th>حافز دورتين</th>
                                                            </tr>
                                                            <tr hidden={!empdata.course_incentive || empdata.course_incentive === '0'}>
                                                                <td>{empdata.course_incentive}</td>
                                                                <th>حافز دوره</th>
                                                            </tr>
                                                            <tr hidden={!empdata.extra_course_incentive || empdata.extra_course_incentive === '0'}>
                                                                <td>{empdata.extra_course_incentive}</td>
                                                                <th>حافز دوره اضافى</th>
                                                            </tr>


                                                            <tr hidden={!empdata.basic_response || empdata.basic_response === '0'}>
                                                                <td>{empdata.basic_response}</td>
                                                                <th>رد اساسى</th>
                                                            </tr>
                                                            <tr hidden={!empdata.car_subscription_refund || empdata.car_subscription_refund === '0'}>
                                                                <td>{empdata.car_subscription_refund}</td>
                                                                <th>رد اشتراك سياره</th>
                                                            </tr>
                                                            <tr hidden={!empdata.garage_allowance_refund || empdata.garage_allowance_refund === '0'}>
                                                                <td>{empdata.garage_allowance_refund}</td>
                                                                <th>رد بدل جراج</th>
                                                            </tr>
                                                            <tr hidden={!empdata.refund_instead_of_the_nature_of_work || empdata.refund_instead_of_the_nature_of_work === '0'}>
                                                                <td>{empdata.refund_instead_of_the_nature_of_work}</td>
                                                                <th>رد بدل طبيعه عمل</th>
                                                            </tr>
                                                            <tr hidden={!empdata.medical_skip_response || empdata.medical_skip_response === '0'}>
                                                                <td>{empdata.medical_skip_response}</td>
                                                                <th>رد تخطيات طبي</th>
                                                            </tr>
                                                            <tr hidden={!empdata.extraordinary_effort_response_departments || empdata.extraordinary_effort_response_departments === '0'}>
                                                                <td>{empdata.extraordinary_effort_response_departments}</td>
                                                                <th>رد جهد غير عادى - ادارات</th>
                                                            </tr>




                                                            <tr hidden={!empdata.extraordinary_effort_response_sale_shows || empdata.extraordinary_effort_response_sale_shows === '0'}>
                                                                <td>{empdata.extraordinary_effort_response_sale_shows}</td>
                                                                <th>رد جهد غير عادى - معارض بيع</th>
                                                            </tr>
                                                            <tr hidden={!empdata.incentive_response || empdata.incentive_response === '0'}>
                                                                <td>{empdata.incentive_response}</td>
                                                                <th>رد حافز</th>
                                                            </tr>
                                                            <tr hidden={!empdata.tax_refund || empdata.tax_refund === '0'}>
                                                                <td>{empdata.tax_refund}</td>
                                                                <th>رد ضريبه</th>
                                                            </tr>
                                                            <tr hidden={!empdata.refund_of_efsco_bonus_1 || empdata.refund_of_efsco_bonus_1 === '0'}>
                                                                <td>{empdata.refund_of_efsco_bonus_1}</td>
                                                                <th>رد علاوه اسواق 1</th>
                                                            </tr>


                                                            <tr hidden={!empdata.the_response_of_the_cost_of_living_allowance || empdata.the_response_of_the_cost_of_living_allowance === '0'}>
                                                                <td>{empdata.the_response_of_the_cost_of_living_allowance}</td>
                                                                <th>رد علاوه غلاء معيشه</th>
                                                            </tr>
                                                            <tr hidden={!empdata.vehicle_damage_response || empdata.vehicle_damage_response === '0'}>
                                                                <td>{empdata.vehicle_damage_response}</td>
                                                                <th>رد متضرري سياره</th>
                                                            </tr>
                                                            <tr hidden={!empdata.violation_response || empdata.violation_response === '0'}>
                                                                <td>{empdata.violation_response}</td>
                                                                <th>رد مخالفات</th>
                                                            </tr>
                                                            <tr hidden={!empdata.re_actual_moving_costs || empdata.re_actual_moving_costs === '0'}>
                                                                <td>{empdata.re_actual_moving_costs}</td>
                                                                <th>رد مصاريف انتقال فعليه</th>
                                                            </tr>
                                                            <tr hidden={!empdata.single_external_transfer_response || empdata.single_external_transfer_response === '0'}>
                                                                <td>{empdata.single_external_transfer_response}</td>
                                                                <th>رد نقله خارجيه فرديه</th>
                                                            </tr>

                                                            <tr hidden={!empdata.company_bonuses || empdata.company_bonuses === '0'}>
                                                                <td>{empdata.company_bonuses}</td>
                                                                <th>علاوات الشركة</th>
                                                            </tr>
                                                            <tr hidden={!empdata.in_addition_to_the_cost_of_living || empdata.in_addition_to_the_cost_of_living === '0'}>
                                                                <td>{empdata.in_addition_to_the_cost_of_living}</td>
                                                                <th>علاوه غلاء معيشه</th>
                                                            </tr>



                                                            <tr hidden={!empdata.encouragement_reward || empdata.encouragement_reward}>
                                                                <td>{empdata.encouragement_reward}</td>
                                                                <th>مكافاه صيانه</th>
                                                            </tr>
                                                            <tr hidden={!empdata.maintenance_bonus || empdata.maintenance_bonus === '0'}>
                                                                <td>{empdata.maintenance_bonus}</td>
                                                                <th>مكافاه مفوضى خطوط</th>
                                                            </tr>
                                                            <tr hidden={!empdata.bonus_messy_lines || empdata.bonus_messy_lines === '0'}>
                                                                <td>{empdata.bonus_messy_lines}</td>
                                                                <th>منحه انجاب - رعايه اجتماعيه</th>
                                                            </tr>
                                                            <tr hidden={!empdata.childbirth_grant_social_care || empdata.childbirth_grant_social_care === '0'}>
                                                                <td>{empdata.childbirth_grant_social_care}</td>
                                                                <th>منحه زواج احد الابناء  - رعايه اجتماعيه</th>
                                                            </tr>
                                                            <tr hidden={!empdata.granted_by_the_death_of_one_of_the_children || empdata.granted_by_the_death_of_one_of_the_children === '0'}>
                                                                <td>{empdata.granted_by_the_death_of_one_of_the_children}</td>
                                                                <th>منحه وفاه احد الوالدين - رعايه اجتماعيه</th>
                                                            </tr>


                                                            <tr hidden={!empdata.trailer_external_transport || empdata.trailer_external_transport === '0'}>
                                                                <td>{empdata.trailer_external_transport}</td>
                                                                <th>نقله خارجيه تريله</th>
                                                            </tr>
                                                            <tr hidden={!empdata.single_outbound_transfer || empdata.single_outbound_transfer === '0'}>
                                                                <td>{empdata.single_outbound_transfer}</td>
                                                                <th>نقله خارجيه فرديه</th>
                                                            </tr>
                                                            <tr hidden={!empdata.individual_internal_transfer || empdata.individual_internal_transfer === '0'}>
                                                                <td>{empdata.individual_internal_transfer}</td>
                                                                <th>نقله داخليه فرديه</th>
                                                            </tr>


                                                            <tr hidden={!empdata.car_damaged || empdata.car_damaged === '0'}>
                                                                <td>{empdata.car_damaged}</td>
                                                                <th>متضررى سياره</th>
                                                            </tr>

                                                            <tr hidden={!empdata.drivers_transportation_expenses_october_site || empdata.drivers_transportation_expenses_october_site === '0'}>
                                                                <td>{empdata.drivers_transportation_expenses_october_site}</td>
                                                                <th>مصاريف انتقال سائقين - موقع اكتوبر</th>
                                                            </tr>

                                                            <tr hidden={!empdata.actual_moving_costs || empdata.actual_moving_costs === '0'}>
                                                                <td>{empdata.actual_moving_costs}</td>
                                                                <th>مصاريف انتقال فعليه</th>
                                                            </tr>

                                                        </thead>
                                                    </table>
                                                </div>
                                                <div className="col-md-6">
                                                    <table class="table table-bordered table-sm text-center">
                                                        <thead>
                                                            <tr hidden={!empdata.Insurances || empdata.Insurances === '0'}>
                                                                <td>{empdata.Insurances}</td>
                                                                <th>تامينات</th>
                                                            </tr>
                                                            <tr hidden={!empdata.tax || empdata.tax === '0'}>
                                                                <td>{empdata.tax}</td>
                                                                <th>ضريبة</th>
                                                            </tr>
                                                            <tr hidden={!empdata.unpaid_leave || empdata.unpaid_leave === '0'}>
                                                                <td>{empdata.unpaid_leave}</td>
                                                                <th>اجازة بدون مرتب</th>
                                                            </tr>


                                                            <tr hidden={!empdata.matrouh_land || empdata.matrouh_land === '0'}>
                                                                <td>{empdata.matrouh_land}</td>
                                                                <th>ارض مطروح</th>
                                                            </tr>
                                                            <tr hidden={!empdata.more_essential || empdata.more_essential === '0'}>
                                                                <td>{empdata.more_essential}</td>
                                                                <th>اساسي بزياده</th>
                                                            </tr>
                                                            <tr hidden={!empdata.car_subscription || empdata.car_subscription === '0'}>
                                                                <td>{empdata.car_subscription}</td>
                                                                <th>اشتراك سياره</th>
                                                            </tr>
                                                            <tr hidden={!empdata.fund_subscription || empdata.fund_subscription === '0'}>
                                                                <td>{empdata.fund_subscription}</td>
                                                                <th>اشتراك صندوق</th>
                                                            </tr>



                                                            <tr hidden={!empdata.club_subscription || empdata.club_subscription === '0'}>
                                                                <td>{empdata.club_subscription}</td>
                                                                <th>اشتراك نادى</th>
                                                            </tr>
                                                            <tr hidden={!empdata.union_membership || empdata.union_membership === '0'}>
                                                                <td>{empdata.union_membership}</td>
                                                                <th>اشتراك نقابه</th>
                                                            </tr>
                                                            <tr hidden={!empdata.egyptian_gulf_bank || empdata.egyptian_gulf_bank === '0'}>
                                                                <td>{empdata.egyptian_gulf_bank}</td>
                                                                <th>البنك المصرى الخليجى</th>
                                                            </tr>
                                                            <tr hidden={!empdata.egyptian_gulf_bank_remaining || empdata.egyptian_gulf_bank_remaining === '0'}>
                                                                <td>{empdata.egyptian_gulf_bank_remaining}</td>
                                                                <th>البنك المصرى الخليجى/متبقى</th>
                                                            </tr>
                                                            <tr hidden={!empdata.ainSukhna_debt_discount || empdata.ainSukhna_debt_discount === '0'}>
                                                                <td>{empdata.ainSukhna_debt_discount}</td>
                                                                <th>العين السخنة-خصم مديونيه</th>
                                                            </tr>
                                                            <tr hidden={!empdata.ainSukh_remaining || empdata.ainSukh_remaining === '0'}>
                                                                <td>{empdata.ainSukh_remaining}</td>
                                                                <th>العين السخنة-خصم مديونيه/متبقى</th>
                                                            </tr>


                                                            <tr hidden={!empdata.housing_development_bank || empdata.housing_development_bank === '0'}>
                                                                <td>{empdata.housing_development_bank}</td>
                                                                <th>بنك التعمير والاسكان</th>
                                                            </tr>
                                                            <tr hidden={!empdata.housing_and_development_bank_remaining || empdata.housing_and_development_bank_remaining === '0'}>
                                                                <td>{empdata.housing_and_development_bank_remaining}</td>
                                                                <th>بنك التعمير والاسكان/متبقى</th>
                                                            </tr>
                                                            <tr hidden={!empdata.community_association || empdata.community_association === '0'}>
                                                                <td>{empdata.community_association}</td>
                                                                <th>جمعيه اهليه</th>
                                                            </tr>
                                                            <tr hidden={!empdata.extraordinary_effort_departments_in_excess || empdata.extraordinary_effort_departments_in_excess === '0'}>
                                                                <td>{empdata.extraordinary_effort_departments_in_excess}</td>
                                                                <th>جهد غير عادى-ادارات بالزياده</th>
                                                            </tr>
                                                            <tr hidden={!empdata.employer_share || empdata.employer_share === '0'}>
                                                                <td>{empdata.employer_share}</td>
                                                                <th>حصه صاحب العمل</th>
                                                            </tr>


                                                            <tr hidden={!empdata.basic_discount || empdata.basic_discount === '0'}>
                                                                <td>{empdata.basic_discount}</td>
                                                                <th>خصم اساسي</th>
                                                            </tr>
                                                            <tr hidden={!empdata.incentive_discount || empdata.incentive_discount === '0'}>
                                                                <td>{empdata.incentive_discount}</td>
                                                                <th>خصم حافز</th>
                                                            </tr>
                                                            <tr hidden={!empdata.incentive_difference_discount || empdata.incentive_difference_discount === '0'}>
                                                                <td>{empdata.incentive_difference_discount}</td>
                                                                <th>خصم فرق حافز</th>
                                                            </tr>
                                                            <tr hidden={!empdata.health_care_over_the_age_of_60 || empdata.health_care_over_the_age_of_60 === '0'}>
                                                                <td>{empdata.health_care_over_the_age_of_60}</td>
                                                                <th>رعايه صحيه فوق سن الـ 60</th>
                                                            </tr>
                                                            <tr hidden={!empdata.company_goods || empdata.company_goods === '0'}>
                                                                <td>{empdata.company_goods}</td>
                                                                <th>سلع شركة</th>
                                                            </tr>



                                                            <tr hidden={!empdata.company_goods_remaining || empdata.company_goods_remaining === '0'}>
                                                                <td>{empdata.company_goods_remaining}</td>
                                                                <th>سلع شركة/متبقى</th>
                                                            </tr>
                                                            <tr hidden={!empdata.fund_advances_advances || empdata.fund_advances_advances === '0'}>
                                                                <td>{empdata.fund_advances_advances}</td>
                                                                <th>سلف الصندوق</th>
                                                            </tr>
                                                            <tr hidden={!empdata.fund_remaining || empdata.fund_remaining === '0'}>
                                                                <td>{empdata.fund_remaining}</td>
                                                                <th>سلف الصندوق/متبقى</th>
                                                            </tr>
                                                            <tr hidden={!empdata.temporary_advances || empdata.temporary_advances === '0'}>
                                                                <td>{empdata.temporary_advances}</td>
                                                                <th>سلف مؤقته</th>
                                                            </tr>
                                                            <tr hidden={!empdata.temporary_residual_advances || empdata.temporary_residual_advances === '0'}>
                                                                <td>{empdata.temporary_residual_advances}</td>
                                                                <th>سلف مؤقته/متبقى</th>
                                                            </tr>
                                                            <tr hidden={!empdata.medical_deductions_skips || empdata.medical_deductions_skips === '0'}>
                                                                <td>{empdata.medical_deductions_skips}</td>
                                                                <th>طبي - خصومات/تخطيات</th>
                                                            </tr>


                                                            <tr hidden={!empdata.medical_discounts_skips_remaining || empdata.medical_discounts_skips_remaining === '0'}>
                                                                <td>{empdata.medical_discounts_skips_remaining}</td>
                                                                <th>طبي - خصومات/تخطيات/متبقى</th>
                                                            </tr>
                                                            <tr hidden={!empdata.special_bonus_for_the_increase || empdata.special_bonus_for_the_increase === '0'}>
                                                                <td>{empdata.special_bonus_for_the_increase}</td>
                                                                <th>علاوه خاصه بالزياده</th>
                                                            </tr>
                                                            <tr hidden={!empdata.umrah_discounting_his_debts || empdata.umrah_discounting_his_debts === '0'}>
                                                                <td>{empdata.umrah_discounting_his_debts}</td>
                                                                <th>عمرة المولد النبوى الشريف1444-خصم مديونيه</th>
                                                            </tr>
                                                            <tr hidden={!empdata.umrah_discounting_his_debts_remaining || empdata.umrah_discounting_his_debts_remaining === '0'}>
                                                                <td>{empdata.umrah_discounting_his_debts_remaining}</td>
                                                                <th>عمرة المولد النبوى الشريف1444-خصم مديونيه/متبقى</th>
                                                            </tr>


                                                            <tr hidden={!empdata.custody || empdata.custody === '0'}>
                                                                <td>{empdata.custody}</td>
                                                                <th>عهد</th>
                                                            </tr>
                                                            <tr hidden={!empdata.bill_we || empdata.bill_we === '0'}>
                                                                <td>{empdata.bill_we}</td>
                                                                <th>فاتوره we</th>
                                                            </tr>
                                                            <tr hidden={!empdata.etisalat_bill || empdata.etisalat_bill === '0'}>
                                                                <td>{empdata.etisalat_bill}</td>
                                                                <th>فاتوره اتصالات</th>
                                                            </tr>
                                                            <tr hidden={!empdata.orange_bill || empdata.orange_bill === '0'}>
                                                                <td>{empdata.orange_bill}</td>
                                                                <th>فاتوره اورنج</th>
                                                            </tr>
                                                            <tr hidden={!empdata.vodafone_bill || empdata.vodafone_bill === '0'}>
                                                                <td>{empdata.vodafone_bill}</td>
                                                                <th>فاتوره فودافون</th>
                                                            </tr>



                                                            <tr hidden={!empdata.premium_premium || empdata.premium_premium === '0'}>
                                                                <td>{empdata.premium_premium}</td>
                                                                <th>قسط بريميوم</th>
                                                            </tr>
                                                            <tr hidden={!empdata.insurance_premium || empdata.insurance_premium === '0'}>
                                                                <td>{empdata.insurance_premium}</td>
                                                                <th>قسط بوليصه تامين</th>
                                                            </tr>
                                                            <tr hidden={!empdata.insurance_policy_premium_remaining || empdata.insurance_policy_premium_remaining === '0'}>
                                                                <td>{empdata.insurance_policy_premium_remaining}</td>
                                                                <th>قسط بوليصه تامين/متبقى</th>
                                                            </tr>
                                                            <tr hidden={!empdata.irregularities || empdata.irregularities === '0'}>
                                                                <td>{empdata.irregularities}</td>
                                                                <th>مخالفات</th>
                                                            </tr>



                                                            <tr hidden={!empdata.irregularities_remaining || empdata.irregularities_remaining === '0'}>
                                                                <td>{empdata.irregularities_remaining}</td>
                                                                <th>مخالفات/متبقى</th>
                                                            </tr>
                                                            <tr hidden={!empdata.previous_term || empdata.previous_term === '0'}>
                                                                <td>{empdata.previous_term}</td>
                                                                <th>مدة سابقة</th>
                                                            </tr>
                                                            <tr hidden={!empdata.disease_75 || empdata.disease_75 === '0'}>
                                                                <td>{empdata.disease_75}</td>
                                                                <th>مرضي 75</th>
                                                            </tr>
                                                            <tr hidden={!empdata.expense || empdata.expense === '0'}>
                                                                <td>{empdata.expense}</td>
                                                                <th>نفقه</th>
                                                            </tr>

                                                        </thead>
                                                    </table>
                                                </div>
                                            </div>
                                            {/* end */}
                                            <div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <table class="table table-bordered table-sm text-center">
                                                            <thead>
                                                                <tr>
                                                                    <td></td>
                                                                    <th>أجرالأشتراك</th>
                                                                </tr>
                                                                <tr>
                                                                    <td>{empdata.total_due}</td>
                                                                    <th>ج.المستحق</th>
                                                                </tr>
                                                            </thead>
                                                        </table>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <table class="table table-bordered table-sm text-center">
                                                            <thead>
                                                                <tr>
                                                                    <td>{empdata.total_deduction}</td>
                                                                    <th>ج.المستقطع</th>
                                                                </tr>
                                                                <tr>
                                                                    <td>{empdata.net_salary}</td>
                                                                    <th>الصافي</th>
                                                                </tr>
                                                            </thead>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    }
                </div>
            </div>
        </div >
    );
}

export default EmpDetail;