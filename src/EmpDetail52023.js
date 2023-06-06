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
                                                                <th>شركة مصر للأسواق الحرة</th>
                                                                <td></td>
                                                            </tr>
                                                            <tr>
                                                                <th>القطاع</th>
                                                                <td>{empdata.sector}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>الادارة</th>
                                                                <td>{empdata.administration}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>كود</th>
                                                                <td>{empdata.employee_code}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>الأسم</th>
                                                                <td>{empdata.employee_name}</td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <table class="table table-borderless table-sm text-end">
                                                            <tr>
                                                                <th>بيان بمفردات مرتب شهر</th>
                                                                <td>{empdata.month}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>الأدارة العامة</th>
                                                                <td>{empdata.public_admin}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>الوظيفة</th>
                                                                <td>{empdata.job_position}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>الدرجة</th>
                                                                <td>{empdata.financial_degree}</td>
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
                                                                    <th>الاساسى</th>
                                                                    <th>ع.مضمومة</th>
                                                                    <th>ع.خاصة</th>
                                                                    <th>ع.إجتماعية</th>
                                                                    <th>ع.ج.إضافية</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>{empdata.basic}</td>
                                                                    <td>{empdata.guaranteed_bonus}</td>
                                                                    <td>{empdata.special_bonus}</td>
                                                                    <td>{empdata.social_bonus}</td>
                                                                    <td>{empdata.extra_bonus}</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <table class="table table-bordered table-sm text-center">
                                                            <thead>
                                                                <tr>
                                                                    <th>ب.موحد</th>
                                                                    <th>ع.موحده</th>
                                                                    <th>ب.مرجح</th>
                                                                    <th>ع.متغير ة</th>
                                                                    <th>أ.المرتب</th>
                                                                    <th>أ.الحافز</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>{empdata.unified_b}</td>
                                                                    <td>{empdata.unified_bonus}</td>
                                                                    <td>{empdata.likely_b}</td>
                                                                    <td>{empdata.variable_bonus}</td>
                                                                    <td>{empdata.salary_a}</td>
                                                                    <td>{empdata.bonus_a}</td>
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

                                                                <th>اساسى الراتب</th>
                                                                <td>{empdata.basic_salary}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.bonus || empdata.bonus === '0'}>

                                                                <th>الحافز</th>
                                                                <td>{empdata.bonus}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.extra_pay || empdata.extra_pay === '0'}>

                                                                <th>اجر اضافى</th>
                                                                <td>{empdata.extra_pay}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.alienation_allowance || empdata.alienation_allowance === '0'}>

                                                                <th>بدل اغتراب</th>
                                                                <td>{empdata.alienation_allowance}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.transfer_allowance_security || empdata.transfer_allowance_security === '0'}>

                                                                <th>بدل انتقال - امن</th>
                                                                <td>{empdata.transfer_allowance_security}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.fixed_transfer_allowance || empdata.fixed_transfer_allowance === '0'}>

                                                                <th>بدل انتقال ثابت</th>
                                                                <td>{empdata.fixed_transfer_allowance}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.fixed_representation_allowance || empdata.fixed_representation_allowance === '0'}>

                                                                <th>بدل تمثيل ثابت</th>
                                                                <td>{empdata.fixed_representation_allowance}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.garage_allowance || empdata.garage_allowance === '0'}>

                                                                <th>بدل جراج</th>
                                                                <td>{empdata.garage_allowance}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.effort_allowance || empdata.effort_allowance === '0'}>

                                                                <th>بدل جهد</th>
                                                                <td>{empdata.effort_allowance}</td>
                                                            </tr>


                                                            <tr hidden={!empdata.effort_allowance_security || empdata.effort_allowance_security === '0'}>

                                                                <th>بدل جهد - امن</th>
                                                                <td>{empdata.effort_allowance_security}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.extra_effort_allowance || empdata.extra_effort_allowance === '0'}>

                                                                <th>بدل جهد اضافى</th>
                                                                <td>{empdata.extra_effort_allowance}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.costume_allowance || empdata.costume_allowance === '0'}>

                                                                <th>بدل زى</th>
                                                                <td>{empdata.costume_allowance}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.travel_allowance_inside_theRepublic || empdata.travel_allowance_inside_theRepublic === '0'}>

                                                                <th>بدل سفر - داخل الجمهوريه</th>
                                                                <td>{empdata.travel_allowance_inside_theRepublic}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.instead_of_thenature_of_work || empdata.instead_of_thenature_of_work === '0'}>

                                                                <th>بدل طبيعه عمل</th>
                                                                <td>{empdata.instead_of_thenature_of_work}</td>
                                                            </tr> <tr hidden={!empdata.work_nature_allowance_doctors || empdata.work_nature_allowance_doctors === '0'}>

                                                                <th>بدل طبيعه عمل - اطباء</th>
                                                                <td>{empdata.work_nature_allowance_doctors}</td>
                                                            </tr> <tr hidden={!empdata.work_nature_allowance_computer_sector || empdata.work_nature_allowance_computer_sector === '0'}>

                                                                <th>بدل طبيعه عمل - قطاع حاسب الى</th>
                                                                <td>{empdata.work_nature_allowance_computer_sector}</td>
                                                            </tr>


                                                            <tr hidden={!empdata.Instead_of_thenature_of_the_director_general_of_security || empdata.Instead_of_thenature_of_the_director_general_of_security === '0'}>

                                                                <th>بدل طبيعه مدير عام الامن</th>
                                                                <td>{empdata.Instead_of_thenature_of_the_director_general_of_security}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.remote_areas_allowance || empdata.remote_areas_allowance === '0'}>

                                                                <th>بدل مناطق نائيه</th>
                                                                <td>{empdata.remote_areas_allowance}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.travel_tickets_internal || empdata.travel_tickets_internal === '0'}>

                                                                <th>تذاكر سفر - داخلى</th>
                                                                <td>{empdata.travel_tickets_internal}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.travel_tickets_expatriates || empdata.travel_tickets_expatriates === '0'}>

                                                                <th>تذاكر سفر - مغتربى الفروع الخارجيه</th>
                                                                <td>{empdata.travel_tickets_expatriates}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.extraordinary_effort_safe || empdata.extraordinary_effort_safe === '0'}>

                                                                <th>جهد غير عادى - امن</th>
                                                                <td>{empdata.extraordinary_effort_safe}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.extraordinary_effort_sale_exhibitions || empdata.extraordinary_effort_sale_exhibitions === '0'}>

                                                                <th>جهد غير عادى - معارض بيع</th>
                                                                <td>{empdata.extraordinary_effort_sale_exhibitions}</td>
                                                            </tr>


                                                            <tr hidden={!empdata.extraordinary_effort_departments || empdata.extraordinary_effort_departments === '0'}>

                                                                <th>جهد غير عادى-ادارات</th>
                                                                <td>{empdata.extraordinary_effort_departments}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.extra_incentive_trill || empdata.extra_incentive_trill === '0'}>

                                                                <th>حافز اضافى تريله</th>
                                                                <td>{empdata.extra_incentive_trill}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.bendrol_stimulus || empdata.bendrol_stimulus === '0'}>

                                                                <th>حافز بندرول</th>
                                                                <td>{empdata.bendrol_stimulus}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.selling_incentive || empdata.selling_incentive === '0'}>

                                                                <th>حافز بيعى</th>
                                                                <td>{empdata.selling_incentive}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.two_cycle_incentive || empdata.two_cycle_incentive === '0'}>

                                                                <th>حافز دورتين</th>
                                                                <td>{empdata.two_cycle_incentive}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.course_incentive || empdata.course_incentive === '0'}>

                                                                <th>حافز دوره</th>
                                                                <td>{empdata.course_incentive}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.extra_course_incentive || empdata.extra_course_incentive === '0'}>

                                                                <th>حافز دوره اضافى</th>
                                                                <td>{empdata.extra_course_incentive}</td>
                                                            </tr>


                                                            <tr hidden={!empdata.basic_response || empdata.basic_response === '0'}>

                                                                <th>رد اساسى</th>
                                                                <td>{empdata.basic_response}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.car_subscription_refund || empdata.car_subscription_refund === '0'}>

                                                                <th>رد اشتراك سياره</th>
                                                                <td>{empdata.car_subscription_refund}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.garage_allowance_refund || empdata.garage_allowance_refund === '0'}>

                                                                <th>رد بدل جراج</th>
                                                                <td>{empdata.garage_allowance_refund}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.refund_instead_of_the_nature_of_work || empdata.refund_instead_of_the_nature_of_work === '0'}>

                                                                <th>رد بدل طبيعه عمل</th>
                                                                <td>{empdata.refund_instead_of_the_nature_of_work}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.medical_skip_response || empdata.medical_skip_response === '0'}>

                                                                <th>رد تخطيات طبي</th>
                                                                <td>{empdata.medical_skip_response}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.extraordinary_effort_response_departments || empdata.extraordinary_effort_response_departments === '0'}>

                                                                <th>رد جهد غير عادى - ادارات</th>
                                                                <td>{empdata.extraordinary_effort_response_departments}</td>
                                                            </tr>




                                                            <tr hidden={!empdata.extraordinary_effort_response_sale_shows || empdata.extraordinary_effort_response_sale_shows === '0'}>

                                                                <th>رد جهد غير عادى - معارض بيع</th>
                                                                <td>{empdata.extraordinary_effort_response_sale_shows}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.incentive_response || empdata.incentive_response === '0'}>

                                                                <th>رد حافز</th>
                                                                <td>{empdata.incentive_response}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.tax_refund || empdata.tax_refund === '0'}>

                                                                <th>رد ضريبه</th>
                                                                <td>{empdata.tax_refund}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.refund_of_efsco_bonus_1 || empdata.refund_of_efsco_bonus_1 === '0'}>

                                                                <th>رد علاوه اسواق 1</th>
                                                                <td>{empdata.refund_of_efsco_bonus_1}</td>
                                                            </tr>


                                                            <tr hidden={!empdata.the_response_of_the_cost_of_living_allowance || empdata.the_response_of_the_cost_of_living_allowance === '0'}>

                                                                <th>رد علاوه غلاء معيشه</th>
                                                                <td>{empdata.the_response_of_the_cost_of_living_allowance}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.vehicle_damage_response || empdata.vehicle_damage_response === '0'}>

                                                                <th>رد متضرري سياره</th>
                                                                <td>{empdata.vehicle_damage_response}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.violation_response || empdata.violation_response === '0'}>

                                                                <th>رد مخالفات</th>
                                                                <td>{empdata.violation_response}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.re_actual_moving_costs || empdata.re_actual_moving_costs === '0'}>

                                                                <th>رد مصاريف انتقال فعليه</th>
                                                                <td>{empdata.re_actual_moving_costs}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.single_external_transfer_response || empdata.single_external_transfer_response === '0'}>

                                                                <th>رد نقله خارجيه فرديه</th>
                                                                <td>{empdata.single_external_transfer_response}</td>
                                                            </tr>

                                                            <tr hidden={!empdata.company_bonuses || empdata.company_bonuses === '0'}>

                                                                <th>علاوات الشركة</th>
                                                                <td>{empdata.company_bonuses}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.in_addition_to_the_cost_of_living || empdata.in_addition_to_the_cost_of_living === '0'}>

                                                                <th>علاوه غلاء معيشه</th>
                                                                <td>{empdata.in_addition_to_the_cost_of_living}</td>
                                                            </tr>



                                                            <tr hidden={!empdata.encouragement_reward || empdata.encouragement_reward}>

                                                                <th>مكافاه صيانه</th>
                                                                <td>{empdata.encouragement_reward}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.maintenance_bonus || empdata.maintenance_bonus === '0'}>

                                                                <th>مكافاه مفوضى خطوط</th>
                                                                <td>{empdata.maintenance_bonus}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.bonus_messy_lines || empdata.bonus_messy_lines === '0'}>

                                                                <th>منحه انجاب - رعايه اجتماعيه</th>
                                                                <td>{empdata.bonus_messy_lines}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.childbirth_grant_social_care || empdata.childbirth_grant_social_care === '0'}>

                                                                <th>منحه زواج احد الابناء  - رعايه اجتماعيه</th>
                                                                <td>{empdata.childbirth_grant_social_care}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.granted_by_the_death_of_one_of_the_children || empdata.granted_by_the_death_of_one_of_the_children === '0'}>

                                                                <th>منحه وفاه احد الوالدين - رعايه اجتماعيه</th>
                                                                <td>{empdata.granted_by_the_death_of_one_of_the_children}</td>
                                                            </tr>


                                                            <tr hidden={!empdata.trailer_external_transport || empdata.trailer_external_transport === '0'}>

                                                                <th>نقله خارجيه تريله</th>
                                                                <td>{empdata.trailer_external_transport}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.single_outbound_transfer || empdata.single_outbound_transfer === '0'}>

                                                                <th>نقله خارجيه فرديه</th>
                                                                <td>{empdata.single_outbound_transfer}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.individual_internal_transfer || empdata.individual_internal_transfer === '0'}>

                                                                <th>نقله داخليه فرديه</th>
                                                                <td>{empdata.individual_internal_transfer}</td>
                                                            </tr>


                                                            <tr hidden={!empdata.car_damaged || empdata.car_damaged === '0'}>

                                                                <th>متضررى سياره</th>
                                                                <td>{empdata.car_damaged}</td>
                                                            </tr>

                                                            <tr hidden={!empdata.drivers_transportation_expenses_october_site || empdata.drivers_transportation_expenses_october_site === '0'}>

                                                                <th>مصاريف انتقال سائقين - موقع اكتوبر</th>
                                                                <td>{empdata.drivers_transportation_expenses_october_site}</td>
                                                            </tr>

                                                            <tr hidden={!empdata.actual_moving_costs || empdata.actual_moving_costs === '0'}>

                                                                <th>مصاريف انتقال فعليه</th>
                                                                <td>{empdata.actual_moving_costs}</td>
                                                            </tr>

                                                        </thead>
                                                    </table>
                                                </div>
                                                <div className="col-md-6">
                                                    <table class="table table-bordered table-sm text-center">
                                                        <thead>
                                                            <tr hidden={!empdata.Insurances || empdata.Insurances === '0'}>
                                                                <th>تامينات</th>
                                                                <td>{empdata.Insurances}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.tax || empdata.tax === '0'}>
                                                                <th>ضريبة</th>
                                                                <td>{empdata.tax}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.unpaid_leave || empdata.unpaid_leave === '0'}>
                                                                <th>اجازة بدون مرتب</th>
                                                                <td>{empdata.unpaid_leave}</td>
                                                            </tr>


                                                            <tr hidden={!empdata.matrouh_land || empdata.matrouh_land === '0'}>
                                                                <th>ارض مطروح</th>
                                                                <td>{empdata.matrouh_land}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.more_essential || empdata.more_essential === '0'}>
                                                                <th>اساسي بزياده</th>
                                                                <td>{empdata.more_essential}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.car_subscription || empdata.car_subscription === '0'}>
                                                                <th>اشتراك سياره</th>
                                                                <td>{empdata.car_subscription}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.fund_subscription || empdata.fund_subscription === '0'}>
                                                                <th>اشتراك صندوق</th>
                                                                <td>{empdata.fund_subscription}</td>
                                                            </tr>



                                                            <tr hidden={!empdata.club_subscription || empdata.club_subscription === '0'}>
                                                                <th>اشتراك نادى</th>
                                                                <td>{empdata.club_subscription}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.union_membership || empdata.union_membership === '0'}>
                                                                <th>اشتراك نقابه</th>
                                                                <td>{empdata.union_membership}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.egyptian_gulf_bank || empdata.egyptian_gulf_bank === '0'}>
                                                                <th>البنك المصرى الخليجى</th>
                                                                <td>{empdata.egyptian_gulf_bank}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.egyptian_gulf_bank_remaining || empdata.egyptian_gulf_bank_remaining === '0'}>
                                                                <th>البنك المصرى الخليجى/متبقى</th>
                                                                <td>{empdata.egyptian_gulf_bank_remaining}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.ainSukhna_debt_discount || empdata.ainSukhna_debt_discount === '0'}>
                                                                <th>العين السخنة-خصم مديونيه</th>
                                                                <td>{empdata.ainSukhna_debt_discount}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.ainSukh_remaining || empdata.ainSukh_remaining === '0'}>
                                                                <th>العين السخنة-خصم مديونيه/متبقى</th>
                                                                <td>{empdata.ainSukh_remaining}</td>
                                                            </tr>


                                                            <tr hidden={!empdata.housing_development_bank || empdata.housing_development_bank === '0'}>
                                                                <th>بنك التعمير والاسكان</th>
                                                                <td>{empdata.housing_development_bank}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.housing_and_development_bank_remaining || empdata.housing_and_development_bank_remaining === '0'}>
                                                                <th>بنك التعمير والاسكان/متبقى</th>
                                                                <td>{empdata.housing_and_development_bank_remaining}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.community_association || empdata.community_association === '0'}>
                                                                <th>جمعيه اهليه</th>
                                                                <td>{empdata.community_association}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.extraordinary_effort_departments_in_excess || empdata.extraordinary_effort_departments_in_excess === '0'}>
                                                                <th>جهد غير عادى-ادارات بالزياده</th>
                                                                <td>{empdata.extraordinary_effort_departments_in_excess}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.employer_share || empdata.employer_share === '0'}>
                                                                <th>حصه صاحب العمل</th>
                                                                <td>{empdata.employer_share}</td>
                                                            </tr>


                                                            <tr hidden={!empdata.basic_discount || empdata.basic_discount === '0'}>
                                                                <th>خصم اساسي</th>
                                                                <td>{empdata.basic_discount}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.incentive_discount || empdata.incentive_discount === '0'}>
                                                                <th>خصم حافز</th>
                                                                <td>{empdata.incentive_discount}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.incentive_difference_discount || empdata.incentive_difference_discount === '0'}>
                                                                <th>خصم فرق حافز</th>
                                                                <td>{empdata.incentive_difference_discount}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.health_care_over_the_age_of_60 || empdata.health_care_over_the_age_of_60 === '0'}>
                                                                <th>رعايه صحيه فوق سن الـ 60</th>
                                                                <td>{empdata.health_care_over_the_age_of_60}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.company_goods || empdata.company_goods === '0'}>
                                                                <th>سلع شركة</th>
                                                                <td>{empdata.company_goods}</td>
                                                            </tr>



                                                            <tr hidden={!empdata.company_goods_remaining || empdata.company_goods_remaining === '0'}>
                                                                <th>سلع شركة/متبقى</th>
                                                                <td>{empdata.company_goods_remaining}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.fund_advances_advances || empdata.fund_advances_advances === '0'}>
                                                                <th>سلف الصندوق</th>
                                                                <td>{empdata.fund_advances_advances}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.fund_remaining || empdata.fund_remaining === '0'}>
                                                                <th>سلف الصندوق/متبقى</th>
                                                                <td>{empdata.fund_remaining}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.temporary_advances || empdata.temporary_advances === '0'}>
                                                                <th>سلف مؤقته</th>
                                                                <td>{empdata.temporary_advances}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.temporary_residual_advances || empdata.temporary_residual_advances === '0'}>
                                                                <th>سلف مؤقته/متبقى</th>
                                                                <td>{empdata.temporary_residual_advances}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.medical_deductions_skips || empdata.medical_deductions_skips === '0'}>
                                                                <th>طبي - خصومات/تخطيات</th>
                                                                <td>{empdata.medical_deductions_skips}</td>
                                                            </tr>


                                                            <tr hidden={!empdata.medical_discounts_skips_remaining || empdata.medical_discounts_skips_remaining === '0'}>
                                                                <th>طبي - خصومات/تخطيات/متبقى</th>
                                                                <td>{empdata.medical_discounts_skips_remaining}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.special_bonus_for_the_increase || empdata.special_bonus_for_the_increase === '0'}>
                                                                <th>علاوه خاصه بالزياده</th>
                                                                <td>{empdata.special_bonus_for_the_increase}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.umrah_discounting_his_debts || empdata.umrah_discounting_his_debts === '0'}>
                                                                <th>عمرة المولد النبوى الشريف1444-خصم مديونيه</th>
                                                                <td>{empdata.umrah_discounting_his_debts}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.umrah_discounting_his_debts_remaining || empdata.umrah_discounting_his_debts_remaining === '0'}>
                                                                <th>عمرة المولد النبوى الشريف1444-خصم مديونيه/متبقى</th>
                                                                <td>{empdata.umrah_discounting_his_debts_remaining}</td>
                                                            </tr>


                                                            <tr hidden={!empdata.custody || empdata.custody === '0'}>
                                                                <th>عهد</th>
                                                                <td>{empdata.custody}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.bill_we || empdata.bill_we === '0'}>
                                                                <th>فاتوره we</th>
                                                                <td>{empdata.bill_we}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.etisalat_bill || empdata.etisalat_bill === '0'}>
                                                                <th>فاتوره اتصالات</th>
                                                                <td>{empdata.etisalat_bill}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.orange_bill || empdata.orange_bill === '0'}>
                                                                <th>فاتوره اورنج</th>
                                                                <td>{empdata.orange_bill}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.vodafone_bill || empdata.vodafone_bill === '0'}>
                                                                <th>فاتوره فودافون</th>
                                                                <td>{empdata.vodafone_bill}</td>
                                                            </tr>



                                                            <tr hidden={!empdata.premium_premium || empdata.premium_premium === '0'}>
                                                                <th>قسط بريميوم</th>
                                                                <td>{empdata.premium_premium}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.insurance_premium || empdata.insurance_premium === '0'}>
                                                                <th>قسط بوليصه تامين</th>
                                                                <td>{empdata.insurance_premium}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.insurance_policy_premium_remaining || empdata.insurance_policy_premium_remaining === '0'}>

                                                                <th>قسط بوليصه تامين/متبقى</th>
                                                                <td>{empdata.insurance_policy_premium_remaining}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.irregularities || empdata.irregularities === '0'}>
                                                                <th>مخالفات</th>
                                                                <td>{empdata.irregularities}</td>
                                                            </tr>



                                                            <tr hidden={!empdata.irregularities_remaining || empdata.irregularities_remaining === '0'}>
                                                                <th>مخالفات/متبقى</th>
                                                                <td>{empdata.irregularities_remaining}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.previous_term || empdata.previous_term === '0'}>
                                                                <th>مدة سابقة</th>
                                                                <td>{empdata.previous_term}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.disease_75 || empdata.disease_75 === '0'}>
                                                                <th>مرضي 75</th>
                                                                <td>{empdata.disease_75}</td>
                                                            </tr>
                                                            <tr hidden={!empdata.expense || empdata.expense === '0'}>
                                                                <th>نفقه</th>
                                                                <td>{empdata.expense}</td>
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
                                                                    <th>أجرالأشتراك</th>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <th>ج.المستحق</th>
                                                                    <td>{empdata.total_due}</td>
                                                                </tr>
                                                            </thead>
                                                        </table>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <table class="table table-bordered table-sm text-center">
                                                            <thead>
                                                                <tr>
                                                                    <th>ج.المستقطع</th>
                                                                    <td>{empdata.total_deduction}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th style={{ backgroundColor: '#E5E4E2' }}>الصافي</th>
                                                                    <td style={{ fontWeight: "bold" }}>{empdata.net_salary}</td>
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