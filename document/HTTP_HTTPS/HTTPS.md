# HTTPS

- HTTPS (Hypertext Transfer Protocol Secure) : Là phiên bản bảo mật của HTTPS, sử dụng SSL/TLS để mã hóa dữ liệu giữa client và server.
- Cách hoạt động của HTTPS:
  - HTTPS dùng cổng 443 (HTTP dùng cổng 80).
  - Trước khi truyền dữ liệu, client và server thực hiện SSL/TLS handshake để xác thực và tạo kết nối an toàn.
    1. Client gửi 'Client Hello' đến server.
    2. Server trả về 'Server Hello' và chứng chỉ SSL (chứa public key của server).
    3. Client kiểm tra chứng chỉ ( qua Certificate Authority)
    4. Client và Server tạo khóa mã hóa chung (symmetric key) để mã hoa dữ liệu.
  - Sau handshake, dữ liệu được mã hóa trước khi truyền đi.
- Ví dụ :
  - Truy cập https://example.com, trình duyệt gửi request qua HTTPS, dữ liệu được mã hóa, không ai đọc được nếu nghe lén
- Đặc điểm :
  - Bảo mật cao, chống nghe lén và giả mạo.
  - Cần chứng chỉ SSL/TLS

## SSL/TLS

- SSL (Secure Sockets Layer) : Là giao thức bảo mật được phát triển bởi Netscape vào năm 1995 để mã hóa dữ liệu giữa client và server, đảm bảo an toàn khi truyền tải
- Hiện tại SSL đã lỗi thời và không còn được sử dụng, Nó bị thay thế bởi TLS (Transport Layer Security) vì có nhiều lỗ hổng bảo mật
- TLS (Transport Layer Security) : Là phiên bản mới của SSL, được phát triển bởi IETF (Internet Engineering Task Force) vào năm 1999.
- TLS sử dụng các thuật toán mã hóa mạnh hơn và được chứng chỉ bởi các tổ chức bảo mật.

### Cách hoạt động của TLS:

- TLS hoạt động qua quá trình TLS Handshake để thiết lập kết nối an toàn:
- Client Hello: Client gửi thông tin (phiên bản TLS, danh sách mã hóa hỗ trợ).
- Server Hello: Server trả lời, chọn mã hóa và gửi chứng chỉ SSL/TLS (chứa public key).
- Xác minh chứng chỉ: Client kiểm tra chứng chỉ qua Certificate Authority (CA).
- Trao đổi khóa:
  - Client và server dùng public/private key để tạo symmetric key (khóa chung).
  - Từ đây, dữ liệu được mã hóa bằng symmetric key (nhanh hơn asymmetric).
- Kết nối an toàn: Dữ liệu truyền qua HTTPS được mã hóa.

## Sự khác nhau giữa HTTP và HTTPS

| Tiêu chí       | HTTP                       | HTTPS                             |
| -------------- | -------------------------- | --------------------------------- |
| Port           | 80                         | 443                               |
| Bảo mật        | No encryption              | Encrypted using SSL/TLS           |
| URL Prefix     | http://                    | https://                          |
| Data Transfer  | Plain text                 | Encrypted text                    |
| Certificate    | Not required               | SSL/TLS certificate required      |
| Speed          | Faster                     | Slightly slower due to encryption |
| Authentication | No built-in authentication | Server authentication             |
| SEO            | Not pioritized             | Prioritized by search engines     |

