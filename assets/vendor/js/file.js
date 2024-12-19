
document.addEventListener('DOMContentLoaded', function() {
    const uploadArea = document.getElementById('uploadArea');
    const fileInput = document.getElementById('fileInput');
    const fileInfo = document.getElementById('fileInfo');
    const fileDetails = fileInfo.querySelector('.file-details');
    const fileName = fileDetails.querySelector('.file-name');
    const deleteBtn = fileDetails.querySelector('.delete-btn');

    // تفعيل اختيار الملف عند النقر على المنطقة
    uploadArea.addEventListener('click', function(e) {
        // تجنب تشغيل input file عند النقر على زر الحذف
        if (!e.target.closest('.delete-btn')) {
            fileInput.click();
        }
    });

    // تحديث عرض الملف عند اختياره
    fileInput.addEventListener('change', function() {
        if (this.files.length > 0) {
            showFileDetails(this.files[0].name);
        }
    });

    // حذف الملف
    deleteBtn.addEventListener('click', function(e) {
        e.stopPropagation(); // منع انتشار الحدث للعناصر الأب
        resetFileInput();
    });

    // معالجة السحب والإفلات
    uploadArea.addEventListener('dragover', function(e) {
        e.preventDefault();
        this.classList.add('dragover');
    });

    uploadArea.addEventListener('dragleave', function(e) {
        e.preventDefault();
        this.classList.remove('dragover');
    });

    uploadArea.addEventListener('drop', function(e) {
        e.preventDefault();
        this.classList.remove('dragover');
        
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            fileInput.files = files;
            showFileDetails(files[0].name);
        }
    });

    // دوال مساعدة
    function showFileDetails(name) {
        fileName.textContent = name;
        fileDetails.style.display = 'flex';
        uploadArea.classList.add('has-file');
    }

    function resetFileInput() {
        fileInput.value = '';
        fileDetails.style.display = 'none';
        uploadArea.classList.remove('has-file');
    }

    // منع فتح الملف في المتصفح عند السحب والإفلات
    document.addEventListener('dragover', function(e) {
        e.preventDefault();
    });

    document.addEventListener('drop', function(e) {
        e.preventDefault();
    });
});
