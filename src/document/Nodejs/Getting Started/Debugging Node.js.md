# Debugging Nodejs

# Hướng Dẫn Gỡ Lỗi Cho Ứng Dụng và Script Node.js

Tài liệu này sẽ giúp bạn bắt đầu gỡ lỗi cho các ứng dụng và script Node.js của mình.

## Kích Hoạt Inspector

Khi được khởi động với tham số `--inspect`, một tiến trình Node.js sẽ lắng nghe các kết nối từ client gỡ lỗi. Mặc định, nó sẽ lắng nghe tại địa chỉ và cổng `127.0.0.1:9229`. Mỗi tiến trình cũng được gán một **UUID** duy nhất.

Client gỡ lỗi cần biết và chỉ định địa chỉ host, cổng và UUID để kết nối. Một URL đầy đủ sẽ trông giống như:  
`ws://127.0.0.1:9229/0f2c936f-b1cd-4ac9-aab3-f63b0f33d55e`.

Node.js cũng sẽ bắt đầu lắng nghe các thông điệp gỡ lỗi nếu nhận được tín hiệu `SIGUSR1`. (**Lưu ý:** `SIGUSR1` không khả dụng trên Windows.)

- Trong Node.js 7 và các phiên bản trước, điều này kích hoạt **API Debugger cũ**.
- Trong Node.js 8 và các phiên bản sau, nó sẽ kích hoạt **API Inspector**.

### Các Vấn Đề Về Bảo Mật

Vì trình gỡ lỗi có toàn quyền truy cập vào môi trường thực thi của Node.js, một tác nhân độc hại có thể kết nối đến cổng này và thực thi mã tùy ý thay mặt cho tiến trình Node.js. Điều quan trọng là phải hiểu các hàm ý bảo mật khi mở cổng gỡ lỗi trên các mạng công cộng và riêng tư.

#### Mở Cổng Gỡ Lỗi Công Khai Là Không An Toàn

Nếu trình gỡ lỗi được ràng buộc với một địa chỉ IP công cộng hoặc `0.0.0.0`, bất kỳ client nào có thể truy cập địa chỉ IP của bạn sẽ có thể kết nối đến trình gỡ lỗi mà không có bất kỳ hạn chế nào và có thể chạy mã tùy ý.

Mặc định, `node --inspect` ràng buộc với `127.0.0.1`. Bạn cần phải cung cấp rõ ràng một địa chỉ IP công cộng hoặc `0.0.0.0` nếu muốn cho phép các kết nối bên ngoài đến trình gỡ lỗi. Việc này có thể khiến bạn gặp phải **rủi ro bảo mật đáng kể**. Chúng tôi khuyên bạn nên đảm bảo có các tường lửa và kiểm soát truy cập thích hợp để ngăn chặn việc lộ thông tin bảo mật.

Xem phần **"Kích Hoạt Các Kịch Bản Gỡ Lỗi Từ Xa"** để biết một số lời khuyên về cách cho phép các client gỡ lỗi từ xa kết nối một cách an toàn.

#### Các Ứng Dụng Cục Bộ Có Toàn Quyền Truy Cập Vào Inspector

Ngay cả khi bạn ràng buộc cổng inspector với `127.0.0.1` (mặc định), bất kỳ ứng dụng nào chạy cục bộ trên máy của bạn sẽ có quyền truy cập không hạn chế. Điều này là thiết kế để cho phép các trình gỡ lỗi cục bộ có thể kết nối một cách thuận tiện.

#### Trình Duyệt, WebSockets và Chính Sách Cùng Nguồn

Các trang web mở trong trình duyệt web có thể thực hiện các yêu cầu WebSocket và HTTP theo mô hình bảo mật của trình duyệt. Một kết nối HTTP ban đầu là cần thiết để lấy **ID phiên gỡ lỗi duy nhất**. **Chính sách cùng nguồn** ngăn các trang web thực hiện kết nối HTTP này. Để bảo mật thêm chống lại các cuộc tấn công **DNS rebinding**, Node.js xác minh rằng các header `Host` cho kết nối chỉ định một địa chỉ IP hoặc `localhost` một cách chính xác.

Các chính sách bảo mật này không cho phép kết nối đến một máy chủ gỡ lỗi từ xa bằng cách chỉ định tên máy chủ. Bạn có thể khắc phục hạn chế này bằng cách chỉ định địa chỉ IP hoặc sử dụng các **đường hầm SSH** như được mô tả bên dưới.

## Các Client Inspector

Một trình gỡ lỗi CLI tối thiểu có sẵn với lệnh `node inspect myscript.js`. Một số công cụ thương mại và mã nguồn mở cũng có thể kết nối đến Node.js Inspector.

### Chrome DevTools 55+, Microsoft Edge

- **Tùy Chọn 1:** Mở `chrome://inspect` trong trình duyệt dựa trên Chromium hoặc `edge://inspect` trong Edge. Nhấp vào nút **Cấu Hình** và đảm bảo rằng host và cổng mục tiêu của bạn được liệt kê.
- **Tùy Chọn 2:** Sao chép `devtoolsFrontendUrl` từ đầu ra của `/json/list` hoặc văn bản gợi ý `--inspect` và dán vào Chrome.

Xem thêm tại:

- [https://github.com/ChromeDevTools/devtools-frontend](https://github.com/ChromeDevTools/devtools-frontend)
- [https://www.microsoftedgeinsider.com](https://www.microsoftedgeinsider.com)

### Visual Studio Code 1.10+

Trong bảng **Debug**, nhấp vào biểu tượng cài đặt để mở `.vscode/launch.json`. Chọn **"Node.js"** cho thiết lập ban đầu.  
Xem thêm tại: [https://github.com/microsoft/vscode](https://github.com/microsoft/vscode)

### Visual Studio 2017+

Chọn **"Debug > Start Debugging"** từ menu hoặc nhấn **F5**.  
Hướng dẫn chi tiết có tại: [https://docs.microsoft.com/en-us/visualstudio/debugger/debug-nodejs](https://docs.microsoft.com/en-us/visualstudio/debugger/debug-nodejs)

### JetBrains WebStorm và các IDE JetBrains khác

Tạo một cấu hình gỡ lỗi Node.js mới và nhấn **Debug**. `--inspect` sẽ được sử dụng mặc định cho Node.js 7+. Để tắt, bỏ chọn `js.debugger.node.use.inspect` trong **Registry** của IDE.  
Xem thêm tại: [https://www.jetbrains.com/help/webstorm/running-and-debugging-node-js.html](https://www.jetbrains.com/help/webstorm/running-and-debugging-node-js.html)

### chrome-remote-interface

Thư viện để dễ dàng kết nối đến các điểm cuối của **Giao Thức Inspector**.  
Xem thêm tại: [https://github.com/cyrus-and/chrome-remote-interface](https://github.com/cyrus-and/chrome-remote-interface)

### Gitpod

Khởi động một cấu hình gỡ lỗi Node.js từ chế độ xem **Debug** hoặc nhấn **F5**.  
Hướng dẫn chi tiết có tại: [https://www.gitpod.io/docs/config-debug](https://www.gitpod.io/docs/config-debug)  
Xem thêm tại: [https://www.gitpod.io](https://www.gitpod.io)

### Eclipse IDE với phần mở rộng Eclipse Wild Web Developer

- Từ một tệp `.js`, chọn **"Debug As... > Node program"**, hoặc
- Tạo một **Cấu Hình Gỡ Lỗi** để gắn trình gỡ lỗi vào ứng dụng Node.js đang chạy (đã được khởi động với `--inspect`).

Xem thêm tại: [https://eclipse.org/eclipseide](https://eclipse.org/eclipseide)

## Các Tùy Chọn Dòng Lệnh

Bảng sau liệt kê tác động của các cờ thời gian chạy khác nhau đối với việc gỡ lỗi:

| **Cờ**                               | **Ý Nghĩa**                                                                                                                                                                          |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--inspect`                          | Kích hoạt agent inspector; Lắng nghe tại địa chỉ và cổng mặc định (127.0.0.1:9229)                                                                                                   |
| `--inspect=[host:port]`              | Kích hoạt agent inspector; Ràng buộc với địa chỉ hoặc tên máy chủ `host` (mặc định: 127.0.0.1); Lắng nghe tại cổng `port` (mặc định: 9229)                                           |
| `--inspect-brk`                      | Kích hoạt agent inspector; Lắng nghe tại địa chỉ và cổng mặc định (127.0.0.1:9229); Dừng lại trước khi mã người dùng bắt đầu                                                         |
| `--inspect-brk=[host:port]`          | Kích hoạt agent inspector; Ràng buộc với địa chỉ hoặc tên máy chủ `host` (mặc định: 127.0.0.1); Lắng nghe tại cổng `port` (mặc định: 9229); Dừng lại trước khi mã người dùng bắt đầu |
| `--inspect-wait`                     | Kích hoạt agent inspector; Lắng nghe tại địa chỉ và cổng mặc định (127.0.0.1:9229); Chờ trình gỡ lỗi được gắn kết                                                                    |
| `--inspect-wait=[host:port]`         | Kích hoạt agent inspector; Ràng buộc với địa chỉ hoặc tên máy chủ `host` (mặc định: 127.0.0.1); Lắng nghe tại cổng `port` (mặc định: 9229); Chờ trình gỡ lỗi được gắn kết            |
| `node inspect script.js`             | Tạo tiến trình con để chạy script của người dùng dưới cờ `--inspect`; và sử dụng tiến trình chính để chạy trình gỡ lỗi CLI                                                           |
| `node inspect --port=xxxx script.js` | Tạo tiến trình con để chạy script của người dùng dưới cờ `--inspect`; và sử dụng tiến trình chính để chạy trình gỡ lỗi CLI. Lắng nghe tại cổng `port` (mặc định: 9229)               |

## Kích Hoạt Các Kịch Bản Gỡ Lỗi Từ Xa

Chúng tôi khuyên bạn **không bao giờ để trình gỡ lỗi lắng nghe trên một địa chỉ IP công cộng**. Nếu bạn cần cho phép các kết nối gỡ lỗi từ xa, chúng tôi khuyên bạn nên sử dụng các **đường hầm SSH** thay thế. Ví dụ sau chỉ mang tính minh họa. Vui lòng hiểu rủi ro bảo mật của việc cho phép truy cập từ xa đến một dịch vụ đặc quyền trước khi tiếp tục.

Giả sử bạn đang chạy Node.js trên một máy từ xa, `remote.example.com`, mà bạn muốn có thể gỡ lỗi. Trên máy đó, bạn nên khởi động tiến trình node với inspector chỉ lắng nghe trên **localhost** (mặc định):

```shell
node --inspect server.js
```

Bây giờ, trên máy cục bộ của bạn từ nơi bạn muốn khởi tạo kết nối client gỡ lỗi, bạn có thể thiết lập một đường hầm SSH:

```shell
ssh -L 9221:localhost:9229 user@remote.example.com
```

Lệnh này khởi động một phiên đường hầm SSH nơi một kết nối đến cổng `9221` trên máy cục bộ của bạn sẽ được chuyển tiếp đến cổng `9229` trên `remote.example.com`. Bây giờ bạn có thể gắn một trình gỡ lỗi như **Chrome DevTools** hoặc **Visual Studio Code** vào `localhost:9221`, và nó sẽ có thể gỡ lỗi như thể ứng dụng Node.js đang chạy cục bộ.

## Trình Gỡ Lỗi Cũ

Trình gỡ lỗi cũ đã bị **loại bỏ kể từ Node.js 7.7.0**. Vui lòng sử dụng `--inspect` và **Inspector** thay thế.

Khi được khởi động với các tham số `--debug` hoặc `--debug-brk` trong phiên bản 7 và trước đó, Node.js lắng nghe các lệnh gỡ lỗi được định nghĩa bởi **Giao Thức Gỡ Lỗi V8** đã ngừng hoạt động trên một cổng TCP, mặc định là `5858`. Bất kỳ client gỡ lỗi nào nói giao thức này đều có thể kết nối và gỡ lỗi tiến trình đang chạy.

**Giao Thức Gỡ Lỗi V8** không còn được duy trì hoặc tài liệu hóa.

### Trình Gỡ Lỗi Tích Hợp

Khởi động `node debug script_name.js` để chạy script của bạn dưới **trình gỡ lỗi dòng lệnh tích hợp**. Script của bạn sẽ khởi động trong một tiến trình Node.js khác được khởi động với tùy chọn `--debug-brk`, và tiến trình Node.js ban đầu sẽ chạy script `_debugger.js` và kết nối đến mục tiêu của bạn.  
Xem thêm tại: [https://nodejs.org/api/debugger.html](https://nodejs.org/api/debugger.html)

### node-inspector

Gỡ lỗi ứng dụng Node.js của bạn với **Chrome DevTools** bằng cách sử dụng một tiến trình trung gian chuyển đổi **Giao Thức Inspector** được sử dụng trong Chromium sang giao thức **V8 Debugger** được sử dụng trong Node.js.  
Xem thêm tại: [https://github.com/node-inspector/node-inspector](https://github.com/node-inspector/node-inspector)

---

Bản dịch này được thực hiện cẩn thận để đảm bảo thông tin kỹ thuật chính xác và dễ hiểu bằng tiếng Việt.
