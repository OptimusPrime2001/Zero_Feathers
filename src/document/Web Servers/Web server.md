# 1. Web server là gì ?

- Web server là một phần mềm ( hoặc phần cứng kết hợp với phần mềm) chịu trách nhiệm xử lý các yêu cầu HTTP/HTTPS từ client và trả về phản hồi response tương ứng.
- Web server nhận yêu cầu từ client, xử lý logic và trả về dữ liệu
- Web server thường là tầng giao tiếp giữa client và ứng dụng backend.

# 2. Vai trò của web server

- Xử lý yêu cầu HTTP:
  - Nhận các yêu cầu HTTP (GET, POST, PUT, DELETE, ...) từ client.
- Định tuyến (Routing):
  - Chuyển yêu cầu đến đúng handler(controller trong NestJs) dựa trên URL và phương thức HTTP.
- Trả về phản hồi :
  - Gửi dữ liệu (JSON,HTML,vv) về client với status code phù hợp (200,404,500)
- Middleware:
  - Xử lý các tác vụ trung gian như (authentication,logging,Cors,)
  - Trong NestJs, mày đã dùng app.enableCors() để cho phép các request từ các domain khác.
- Quản lý giao thức :
  - Hỗ trợ HTTP/HTTPS, Websocket
