    async function sendHandoverMerged(){
      const required = ['handover_sector','handover_shift','handover_date','handover_time_from','handover_time_to'];
      for (const id of required){
        const el = document.getElementById(id);
        if (!el || !String(el.value).trim()){
          showAlert('handoverAlert','error','يرجى تعبئة البيانات الأساسية لنموذج تسليم المناوبة');
          return;
        }
      }

      const s1 = getSupportRow(1);
      const s2 = getSupportRow(2);
      const s3 = getSupportRow(3);

      const hasMethane = document.getElementById('has_major_events').value;
      if(hasMethane === 'نعم'){
        const methaneReq = ['h_methane_major','h_methane_location','h_methane_type'];
        for(const id of methaneReq){
          const el = document.getElementById(id);
          if(!el || !String(el.value).trim()){
            showAlert('handoverAlert','error','يرجى تعبئة بيانات رسالة ميثان الأساسية');
            return;
          }
        }
      }

      const row = {
        "وقت الحفظ": new Date().toLocaleString('ar-SA'),
        "القطاع": document.getElementById('handover_sector').value,
        "نوع المناوبة": document.getElementById('handover_shift').value,
        "التاريخ": document.getElementById('handover_date').value,
        "الوقت من": document.getElementById('handover_time_from').value,
        "الوقت إلى": document.getElementById('handover_time_to').value,
        "كبير المسعفين المسلم": document.getElementById('handover_sender').value || '-',
        "كبير المسعفين المستلم": document.getElementById('handover_receiver').value || '-',
        "مساعد 1": document.getElementById('handover_assistant1').value || '-',
        "مساعد 2": document.getElementById('handover_assistant2').value || '-',
        "مساعد 3": document.getElementById('handover_assistant3').value || '-',
        "مساعد 4": document.getElementById('handover_assistant4').value || '-',
        "متوسط زمن الاستجابة": document.getElementById('avg_response').value || '0',
        "متوسط زمن استجابة ECHO": document.getElementById('echo_response').value || '0',
        "إجمالي البلاغات": document.getElementById('total_cases').value || '0',
        "عدد الفرق الفعالة": document.getElementById('active_teams').value || '0',
        "عدد الفرق المعتمدة": document.getElementById('planned_teams').value || '0',
        "أحداث طارئة": hasMethane,
        "M-حادث جسيم": document.getElementById('h_methane_major').value || '-',
        "E-الموقع": document.getElementById('h_methane_location').value || '-',
        "T-نوع الحادث": document.getElementById('h_methane_type').value || '-',
        "H-المخاطر": document.getElementById('h_methane_hazards').value || '-',
        "A-الوصول": document.getElementById('h_methane_access').value || '-',
        "N-الإصابات": document.getElementById('h_methane_casualties').value || '-',
        "E-الخدمات": document.getElementById('h_methane_services').value || '-',
        "ملاحظات ميثان": document.getElementById('h_methane_notes').value || '-',
        "عدد مركبات الإسعاف": document.getElementById('handover_ambulance_count').value || '0',
        "عدد القولف": document.getElementById('handover_golf_count').value || '0',
        "عدد الاستجابة النوعية": document.getElementById('handover_special_response_count').value || '0',
        "العاملة": document.getElementById('working_vehicles').value || '0',
        "الاحتياط": document.getElementById('reserve_vehicles').value || '0',
        "الخارج عن الخدمة": document.getElementById('out_of_service').value || '0',
        "بلاغات الدعم اللوجستي": document.getElementById('logistic_reports').value || '0',
        "البلاغات المفتوحة": document.getElementById('open_logistic_reports').value || '0',
        "مواقع الانتشار": document.getElementById('deployment_sites').value.trim() || 'لايوجد',
        "الوحدات المتعطلة ومواقعها": document.getElementById('faulty_units').value.trim() || 'لايوجد',
        "نداء الفرقة 1": s1.call || '',
        "توقيت العطل 1": s1.time || '',
        "نوع العطل 1": s1.type || '',
        "الإجراء المتبع 1": s1.action || '',
        "العودة للخدمة 1": s1.back || '',
        "لوحة المركبة 1": s1.plate || '',
        "نداء الفرقة 2": s2.call || '',
        "توقيت العطل 2": s2.time || '',
        "نوع العطل 2": s2.type || '',
        "الإجراء المتبع 2": s2.action || '',
        "العودة للخدمة 2": s2.back || '',
        "لوحة المركبة 2": s2.plate || '',
        "نداء الفرقة 3": s3.call || '',
        "توقيت العطل 3": s3.time || '',
        "نوع العطل 3": s3.type || '',
        "الإجراء المتبع 3": s3.action || '',
        "العودة للخدمة 3": s3.back || '',
        "لوحة المركبة 3": s3.plate || '',
        "التحذيرات الجوية": document.getElementById('weather_warning').value.trim() || 'لايوجد',
        "التحذيرات الأمنية": document.getElementById('security_warning').value.trim() || 'لايوجد',
        "مواقع خطرة": document.getElementById('dangerous_sites').value.trim() || 'لايوجد',
        "إصابات العاملين": document.getElementById('worker_injuries').value.trim() || 'لايوجد',
        "إحاطات أخرى": document.getElementById('other_briefings').value.trim() || 'لايوجد',
        "ملخص الأحداث": document.getElementById('events_summary').value.trim() || 'لايوجد',
        "ملخص الموارد المطلوبة وتوزيعها": document.getElementById('resources_summary').value.trim() || 'لايوجد',
        "ملاحظات عامة عن المناوبة": document.getElementById('handover_notes').value.trim() || 'لايوجد'
      };

      row["الرسالة النهائية"] = buildHandoverMessage(row);

      const save = await saveToGoogleSheets('تسليم المناوبة', [row]);
      if(!save.success){
        showAlert('handoverAlert','error','تعذر حفظ بيانات تسليم المناوبة');
        return;
      }

      showAlert('handoverAlert','success','تم حفظ نموذج تسليم المناوبة بنجاح');
      openWhatsApp(row["الرسالة النهائية"]);
    }
