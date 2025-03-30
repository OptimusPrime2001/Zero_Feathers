# 1. HTTP là gì ?

- HTTP (Hypertext Transfer Protocol) : Là giao thức truyền tải siêu văn bản, được sử dụng để giao tiếp giữa client và server. Nó hoạt động theo mô mô hình request-response.
- Cách hoạt động của HTTP:
  - Client gửi request đến server (Get, Post, Put, Delete, ...)
  - Server xử lý request và trả về response. với mã trạng thái(status code) và nội dung dữ liệu.
  - Client nhận response và xử lý.
- Ví dụ :
  - Khi truy cập http://example.com, trình duyệt sẽ gửi một request đến server của example.com.
  - Server sẽ xử lý request và trả về response với mã trạng thái 200 và nội dung HTML của trang web.
  ```text
    Request: GET / HTTP/1.1
    Host: example.com
    User-Agent: Mozilla/5.0
  ```
  - Trình duyệt sẽ hiển thị nội dung HTML của trang web.
- Đặc điểm :
  - Không mã hóa du liệu, dữ liệu truyền đi dưới dạng plain text.
  - Không an toàn và dễ bị nghe lén.

