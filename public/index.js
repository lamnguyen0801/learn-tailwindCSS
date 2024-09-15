// show menu expand
// document.addEventListener('DOMContentLoaded', () => { }) để đảm bảo rằng mã JavaScript chỉ chạy sau khi toàn bộ tài liệu HTML đã được tải và phân tích cú pháp đầy đủ bởi trình duyệt. Điều này ngăn chặn các lỗi tiềm ẩn khi mã của bạn cố gắng truy cập vào các phần tử trong DOM (như getElementById) trước khi chúng sẵn sàng, điều có thể dẫn đến lỗi khi truy cập vào giá trị null.
document.addEventListener('DOMContentLoaded', () => {
    const topMenu = document.getElementById("cs-top-menu");
    const toggleTopMenuIcon = document.getElementById("cs-toggle-top-menu-icon");

    // sd document để có thể lắng nghe ngay cả khi click ra ngoài toggleTopMenuIcon
    document.addEventListener('click', (e) => {
        if(toggleTopMenuIcon.contains(e.target)) {
            // click vào toggle top menu icon
            topMenu.classList.toggle('hidden'); // toggle ẩn class hidden
            topMenu.classList.toggle('cs-top-menu-expanded'); // toggle hiện class cs-top-menu-expanded
        } else {
            // click ra ngoài toggle top menu icon
            // ko sd toggle ở đây do nó ko quan tâm trạng thái hiện tại mà ở đây cần xem trạng thái class expanded có mở thì thêm hidden và xóa expanded
            if(topMenu.classList.contains('cs-top-menu-expanded')) {
                topMenu.classList.remove('cs-top-menu-expanded');
                topMenu.classList.add('cs-top-menu-collapsing');

                // Đợi animation kết thúc trước khi ẩn
                setTimeout(() => {
                    topMenu.classList.remove('cs-top-menu-collapsing');
                    topMenu.classList.add('hidden');
                }, 400); // khớp với thời gian animation slideUp (0.4s)
            }
        }
    })
})