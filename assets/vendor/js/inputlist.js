function initializeCityDropdown(inputId, dropdownId, statementTextAreaId) {
     const input = document.getElementById(inputId);
     const dropdown = document.getElementById(dropdownId);
     const statementTextArea = document.getElementById(statementTextAreaId);
   
     if (!input || !dropdown || !statementTextArea) {
         console.error("One or more elements are missing:", { inputId, dropdownId, statementTextAreaId });
         return; // Exit if any element is missing
     }
   
     // عرض القائمة عند الكتابة في input
     input.addEventListener("input", () => {
         const query = input.value.toLowerCase();
         dropdown.style.display = "block"; // إظهار القائمة
   
         const listItems = dropdown.querySelectorAll("li");
         listItems.forEach((li) => {
             // تصفية الخيارات بناءً على الإدخال
             if (li.textContent.toLowerCase().includes(query)) {
                 li.style.display = "block"; // إظهار الخيار إذا كان مطابقًا
             } else {
                 li.style.display = "none"; // إخفاء الخيار إذا لم يكن مطابقًا
             }
         });
   
         // إخفاء القائمة إذا لم يكن هناك نتائج
         const hasVisibleItems = Array.from(listItems).some(li => li.style.display === "block");
         if (!hasVisibleItems) {
             dropdown.style.display = "none";
         }
     });
   
     // تحديد الخيار عند النقر
     const listItems = dropdown.querySelectorAll("li");
     listItems.forEach((li) => {
         li.addEventListener("click", () => {
             input.value = li.textContent; // تعيين النص إلى حقل الإدخال
             dropdown.style.display = "none"; // إخفاء القائمة
             
             // تحديث النص في البيان الضريبي باستخدام data-value
             const dataValue = li.getAttribute('data-value');
             statementTextArea.value = dataValue || ""; // تعيين قيمة data-value
         });
     });
   
     // إخفاء القائمة عند النقر خارجها
     document.addEventListener("click", (e) => {
         if (e.target !== input && !dropdown.contains(e.target)) {
             dropdown.style.display = "none";
         }
     });
   }
   
   // استدعاء الدالة لتفعيل الأحداث
   initializeCityDropdown('city', 'options', 'tax-statement');