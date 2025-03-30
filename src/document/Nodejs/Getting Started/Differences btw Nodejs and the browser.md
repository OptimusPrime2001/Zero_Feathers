- Cả trình duyệt và Node.js đều sử dụng Javascript như ngôn ngữ lập trình của chúng. Xây dựng các ứng dụng chạy trên trình duyệt thì hoàn toàn khác biệt so với xây dựng ứng dụng Nodejs. Mặc dù thực tế rằng nó luôn là Javascript, có vài yếu tố khác nhau chính làm cho trải nghiệm hoàn toàn khác nhau
- Từ khía cạnh của Fe dev người sử dụng Javascript thường xuyên, Node.js apps mang đến họ một lợi ích lớn : Sự thoải mái của việc lập trình mọi thứ, Frontend và Backend - 1 ngôn ngữ duy nhất
- Bạn có cơ hội lơn bởi vì chúng ta biết độ khó sẽ rất nhiều, học sâu một ngôn ngữ lập trình, và sử dụng cùng ngôn ngữ để biển diễn tất cả công việc trên web, cả client và trên server

**Những thay đổi trong hệ sinh thái**

- Trong trình duyệt, hầu hết thời gian bạn đang tương tác với DOM, hoặc các nền tảng web API khác như Cookies. Chúng đương nhiên không tồn tại trong Nodejs. Bạn không có document, window và tất cả các object mà được cung cấp bởi browser
- Và trong Browser, bạn không có tất cả những API tuyệt vời mà Node.js cung cấp thông quá các modules, như `filesystem`
- Một sự khác bị lớn khác là Node.js kiểm soát môi trường. Trừ khi bạn xây dựng một ứng dụng mã nguồn mở mà mọi người có thể deploy ở bất cứ đâu, bạn biết version nào của Nodejs bạn sẽ chạy ở ứng dụng. So với với môi trường browser.
- Có nghĩa là bạn có thể viết tất cẩ các Modern Javascript ES2015 rằng ứng dụng Nodejs của bạn có thể support. Kể từ Javascript phát triển rất nhanh, nhưng trình duyệt can thể nâng cấp chậm hơn, đôi khi trên web bạn đang gặp vấn đề về chuyển đổi code từ Es5 với browser, nhưng trong Node.js, bạn không cần điều đó
- Một sự khác biệt khác là Node.js hỗ trợ cả hai CommonS và ES Module ( kể từ Nodejs vesion 12), trong khi browser, bạn bắt đầu nhìn ES Modules tiêu chuẩn được tiến hành
- Trong thực tế, điều này có nghĩa là bạn có thể sử dụng cả hai require() và import in Node.js, Trong khi bạn bị giới hạn để nhập trong trình duyệt

