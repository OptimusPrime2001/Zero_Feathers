# Giới thiệu về Trình quản lý gói npm

npm là trình quản lý gói mạnh mẽ, đóng vai trò quan trọng trong sự thành công của Node.js. Vào tháng 9 năm 2022, hơn 2,1 triệu gói đã được báo cáo là có mặt trong kho lưu trữ npm, khiến nó trở thành kho lưu trữ mã nguồn đơn ngôn ngữ lớn nhất trên Trái Đất, và bạn có thể chắc chắn rằng gần như mọi thứ đều có một gói phù hợp!

## npm là gì?

npm bắt đầu như một cách để tải xuống và quản lý các phụ thuộc của các gói Node.js, nhưng kể từ đó nó đã trở thành một công cụ được sử dụng cả trong JavaScript phía giao diện (frontend). Yarn và pnpm là các lựa chọn thay thế cho giao diện dòng lệnh (CLI) của npm. Bạn cũng có thể thử tìm hiểu về chúng.

npm cài đặt, cập nhật và quản lý việc tải xuống các phụ thuộc của dự án của bạn. Phụ thuộc là các đoạn mã được xây dựng sẵn, chẳng hạn như thư viện và gói, mà ứng dụng Node.js của bạn cần để hoạt động.

## Cài đặt npm

Để sử dụng npm, bạn cần cài đặt Node.js, vì npm được tích hợp sẵn trong Node.js. Bạn có thể tải Node.js từ trang chủ chính thức tại đây: [nodejs.org](https://nodejs.org).

Khi bạn chạy lệnh:

```bash
npm install
```

npm sẽ cài đặt mọi thứ mà dự án cần vào thư mục `node_modules`, tạo thư mục này nếu nó chưa tồn tại. Bạn cũng có thể cài đặt một gói cụ thể bằng cách chạy:

```bash
npm install <package-name>
```

Hơn nữa, kể từ npm phiên bản 5, lệnh này tự động thêm `<package-name>` vào phần `dependencies` trong tệp `package.json`. Trước phiên bản 5, bạn cần thêm cờ `--save`. Thường thì bạn sẽ thấy các cờ khác được thêm vào lệnh này:

- `--save-dev`: cài đặt và thêm mục vào phần `devDependencies` trong tệp `package.json`.
- `--save-optional`: cài đặt và thêm mục vào phần `optionalDependencies`.
- `--no-optional`: ngăn cài đặt các phụ thuộc tùy chọn.

Sự khác biệt giữa `devDependencies` và `dependencies` là `devDependencies` chứa các công cụ phát triển, như thư viện kiểm thử, trong khi `dependencies` được đóng gói cùng ứng dụng khi triển khai sản phẩm. Còn với `optionalDependencies`, điểm khác biệt là việc xây dựng thất bại của phụ thuộc này sẽ không khiến quá trình cài đặt thất bại. Tuy nhiên, chương trình của bạn phải tự xử lý trường hợp thiếu phụ thuộc đó. Tìm hiểu thêm về phụ thuộc tùy chọn tại đây: [optional dependencies](#).

## Quản lý phiên bản

Ngoài việc chỉ tải xuống, npm còn quản lý phiên bản, nên bạn có thể chỉ định bất kỳ phiên bản cụ thể nào của gói, hoặc yêu cầu phiên bản cao hơn hay thấp hơn so với nhu cầu của bạn.

Nhiều khi bạn sẽ thấy một thư viện chỉ tương thích với bản phát hành chính của một thư viện khác. Hoặc một lỗi trong bản phát hành mới nhất của thư viện, vẫn chưa được sửa, đang gây ra vấn đề. Việc chỉ định phiên bản rõ ràng của một thư viện cũng giúp đảm bảo mọi người trong nhóm sử dụng cùng một phiên bản chính xác của gói, để toàn đội cùng chạy một phiên bản cho đến khi tệp `package.json` được cập nhật.

Trong mọi trường hợp đó, quản lý phiên bản rất hữu ích, và npm tuân theo tiêu chuẩn **phiên bản ngữ nghĩa (semantic versioning - semver)**. Bạn có thể cài đặt một phiên bản cụ thể của gói bằng cách chạy:

```bash
npm install <package-name>@<version>
```

Ví dụ:

```bash
npm install lodash@4.17.21
```

## Scripts trong npm

npm cũng cho phép bạn chạy các lệnh tùy chỉnh thông qua phần `"scripts"` trong tệp `package.json`. Ví dụ:

```json
{
  "scripts": {
    "start-dev": "node lib/server-development",
    "start": "node lib/server-production"
  }
}
```

Bạn có thể chạy các script này bằng lệnh:

```bash
npm run <script-name>
```

Ví dụ:

```bash
npm run start-dev
```

Dưới đây là một ví dụ phức tạp hơn:

```json
{
  "scripts": {
    "watch": "webpack --watch --progress --colors --config webpack.conf.js",
    "dev": "webpack --progress --colors --config webpack.conf.js",
    "prod": "NODE_ENV=production webpack -p --config webpack.conf.js"
  }
}
```

Với thiết lập này, bạn có thể chạy:

```bash
npm run watch
npm run dev
npm run prod
```

Các script này rất hữu ích để tự động hóa các tác vụ trong quy trình phát triển của bạn.

## Kết luận

