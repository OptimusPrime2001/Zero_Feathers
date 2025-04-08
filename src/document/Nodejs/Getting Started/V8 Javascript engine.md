### Động cơ JavaScript V8

V8 là tên của động cơ JavaScript cung cấp sức mạnh cho Google Chrome. Nó là thứ chịu trách nhiệm nhận mã JavaScript của chúng ta và thực thi nó khi chúng ta duyệt web bằng Chrome.

V8 là động cơ JavaScript, nghĩa là nó phân tích cú pháp (parse) và thực thi mã JavaScript. DOM và các API nền tảng web khác (tất cả cùng tạo nên môi trường chạy - runtime environment) được cung cấp bởi trình duyệt.

Điều thú vị là động cơ JavaScript này độc lập với trình duyệt mà nó được tích hợp. Đặc điểm quan trọng này đã mở đường cho sự ra đời của Node.js. V8 được chọn làm động cơ cho Node.js từ năm 2009, và khi Node.js trở nên phổ biến mạnh mẽ, V8 đã trở thành động cơ cung cấp sức mạnh cho một lượng lớn mã phía server được viết bằng JavaScript.

Hệ sinh thái Node.js rất rộng lớn, và nhờ V8, nó cũng hỗ trợ các ứng dụng desktop thông qua các dự án như Electron.

### Các động cơ JS khác

Các trình duyệt khác có động cơ JavaScript riêng của chúng:

- Firefox có SpiderMonkey.
- Safari có JavaScriptCore (còn gọi là Nitro).
- Edge ban đầu dựa trên Chakra, nhưng gần đây đã được xây dựng lại bằng Chromium và động cơ V8.
- Và còn nhiều động cơ khác nữa tồn tại.

Tất cả các động cơ này đều tuân theo tiêu chuẩn ECMA ES-262, còn gọi là ECMAScript, tiêu chuẩn mà JavaScript sử dụng.

### Cuộc đua hiệu suất

V8 được viết bằng C++ và liên tục được cải tiến. Nó có tính di động cao, chạy được trên Mac, Windows, Linux và nhiều hệ thống khác.

Trong phần giới thiệu về V8 này, chúng ta sẽ không đi sâu vào chi tiết triển khai của V8: những thông tin đó có thể được tìm thấy trên các trang web chính thống hơn (ví dụ: trang chính thức của V8), và chúng thay đổi theo thời gian, đôi khi là thay đổi lớn.

V8 luôn tiến hóa, giống như các động cơ JavaScript khác, để tăng tốc độ cho Web và hệ sinh thái Node.js.

Trên web, đã có một cuộc đua về hiệu suất kéo dài nhiều năm, và chúng ta (với tư cách là người dùng và nhà phát triển) được hưởng lợi rất nhiều từ sự cạnh tranh này, vì chúng ta có được những cỗ máy nhanh hơn và tối ưu hơn qua từng năm.

### Biên dịch

JavaScript thường được coi là một ngôn ngữ thông dịch (interpreted language), nhưng các động cơ JavaScript hiện đại không chỉ đơn thuần thông dịch mã JavaScript nữa, chúng còn biên dịch nó.

Điều này bắt đầu từ năm 2009, khi trình biên dịch JavaScript SpiderMonkey được thêm vào Firefox 3.5, và mọi người sau đó đều theo xu hướng này.

JavaScript được V8 biên dịch nội bộ bằng kỹ thuật **biên dịch tức thời (Just-In-Time - JIT)** để tăng tốc độ thực thi.

Điều này có thể hơi ngược với suy nghĩ thông thường, nhưng kể từ khi Google Maps ra mắt vào năm 2004, JavaScript đã phát triển từ một ngôn ngữ thường chỉ thực thi vài chục dòng mã thành các ứng dụng hoàn chỉnh với hàng nghìn đến hàng trăm nghìn dòng mã chạy trong trình duyệt.

Các ứng dụng của chúng ta giờ đây có thể chạy hàng giờ trong trình duyệt, thay vì chỉ là vài quy tắc xác thực biểu mẫu hoặc các đoạn mã đơn giản.

Trong thế giới mới này, việc biên dịch JavaScript là hoàn toàn hợp lý, bởi mặc dù có thể mất thêm một chút thời gian để chuẩn bị mã JavaScript, nhưng một khi hoàn tất, nó sẽ hoạt động hiệu quả hơn rất nhiều so với mã chỉ được thông dịch thuần túy.
tài liệu ok

