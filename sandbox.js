document.addEventListener('DOMContentLoaded', function() {
    var readMoreBtn = document.querySelectorAll(".readMoreBtn");        
    readMoreBtn.forEach(function(btn) {
        btn.addEventListener('click', function() {            
            //找到按鈕相關的ul
            var content = btn.parentElement.querySelectorAll('.content');
            content.forEach(function(content){
                content.classList.toggle('hidden-content');
                //console.log(content);
            })
            var span = btn.querySelector('span');
            //console.log(span.textContent);
            //切換按鈕文字
            span.textContent = span.textContent === 'Read More' ? 'Read Less' : 'Read More'; 
            //console.log(span.textContent);
        });
    });    
});