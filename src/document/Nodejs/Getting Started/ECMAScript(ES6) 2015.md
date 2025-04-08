### ECMAScript 2015 (ES6) và hơn thế nữa

JavaScript là ngôn ngữ lập trình chính được sử dụng trong Node.js. Ngôn ngữ này được tiêu chuẩn hóa bởi ECMA International thông qua thông số kỹ thuật ECMAScript (thường được gọi là ES). Bản cập nhật lớn đầu tiên cho JavaScript trong nhiều năm là ECMAScript 2015 (hay ES6), được phát hành vào năm 2015. Kể từ đó, các phiên bản mới của ECMAScript được phát hành hàng năm, mỗi phiên bản đều mang đến các tính năng và cải tiến mới.

Node.js hỗ trợ nhiều tính năng của ECMAScript hiện đại, nhưng mức độ hỗ trợ phụ thuộc vào phiên bản của Node.js mà bạn đang sử dụng. Trong hướng dẫn này, chúng ta sẽ khám phá một số tính năng nổi bật của ES6 và các phiên bản sau đó, đồng thời giải thích cách chúng hoạt động trong Node.js.

#### 1. Cú pháp khai báo biến với `let` và `const`

Trước ES6, JavaScript chỉ có `var` để khai báo biến, vốn có phạm vi hàm (function scope) và một số hành vi không mong muốn như "hoisting" (nâng cấp). ES6 giới thiệu `let` và `const`, mang lại phạm vi khối (block scope) và cách quản lý biến tốt hơn.

- **`let`**: Dùng để khai báo biến có thể thay đổi giá trị.
- **`const`**: Dùng để khai báo hằng số, giá trị không thể gán lại (nhưng đối tượng hoặc mảng được khai báo bằng `const` vẫn có thể thay đổi nội dung bên trong).

Ví dụ:

```javascript
let x = 10;
x = 20; // Hợp lệ
const y = 30;
// y = 40; // Lỗi: Không thể gán lại giá trị cho const
```

#### 2. Hàm mũi tên (Arrow Functions)

Hàm mũi tên cung cấp cú pháp ngắn gọn hơn cho việc định nghĩa hàm và không có `this` riêng, thay vào đó sử dụng `this` từ phạm vi bên ngoài.

Ví dụ:

```javascript
// Trước ES6
function add(a, b) {
  return a + b;
}

// Với hàm mũi tên
const add = (a, b) => a + b;
```

#### 3. Mẫu đối tượng và phân rã (Destructuring)

Phân rã cho phép trích xuất dữ liệu từ mảng hoặc đối tượng một cách dễ dàng.

Ví dụ:

```javascript
const person = { name: 'Node', version: '18' };
const { name, version } = person;
console.log(name); // "Node"
console.log(version); // "18"

const numbers = [1, 2, 3];
const [first, second] = numbers;
console.log(first); // 1
console.log(second); // 2
```

#### 4. Chuỗi mẫu (Template Literals)

Chuỗi mẫu cho phép nhúng biểu thức vào chuỗi bằng ký hiệu `` ` `` và `${}`.

Ví dụ:

```javascript
const name = 'Node.js';
console.log(`Hello, ${name}!`); // "Hello, Node.js!"
```

#### 5. Tham số mặc định (Default Parameters)

Bạn có thể chỉ định giá trị mặc định cho tham số của hàm.

Ví dụ:

```javascript
function greet(name = 'Guest') {
  return `Hello, ${name}!`;
}
console.log(greet()); // "Hello, Guest!"
console.log(greet('User')); // "Hello, User!"
```

#### 6. Promise và async/await

ES6 giới thiệu `Promise` để xử lý các hoạt động bất đồng bộ. Các phiên bản sau (ES2017) bổ sung `async/await` để làm cho mã bất đồng bộ dễ đọc hơn.

Ví dụ với Promise:

```javascript
const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Data'), 1000);
  });
};

fetchData().then((data) => console.log(data)); // "Data" sau 1 giây
```

Ví dụ với async/await:

```javascript
const getData = async () => {
  const data = await fetchData();
  console.log(data); // "Data" sau 1 giây
};
getData();
```

#### 7. Module (ES Modules)

ES6 giới thiệu hệ thống module chính thức với `import` và `export`. Node.js hỗ trợ ES Modules từ phiên bản 12 trở lên, mặc dù CommonJS (`require`) vẫn là mặc định.

Ví dụ:

```javascript
// file: math.js
export const add = (a, b) => a + b;

// file: main.js
import { add } from './math.js';
console.log(add(2, 3)); // 5
```

Để sử dụng ES Modules trong Node.js, bạn cần thêm `"type": "module"` vào `package.json` hoặc sử dụng phần mở rộng `.mjs`.

#### 8. Các tính năng khác

- **Spread Operator (`...`)**: Sao chép hoặc hợp nhất mảng và đối tượng.
  ```javascript
  const arr1 = [1, 2];
  const arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]
  ```
- **Rest Parameters**: Thu thập các tham số còn lại vào một mảng.
  ```javascript
  function sum(...numbers) {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(sum(1, 2, 3)); // 6
  ```

#### Kiểm tra hỗ trợ trong Node.js

Không phải tất cả các tính năng ECMAScript đều được hỗ trợ ngay lập tức trong mọi phiên bản Node.js. Bạn có thể kiểm tra phiên bản Node.js của mình bằng lệnh:

```bash
node --version
```

Sau đó, tham khảo tài liệu chính thức của Node.js để xem tính năng nào được hỗ trợ trong phiên bản đó.

#### Kết luận

Các tính năng từ ES6 trở lên đã làm cho JavaScript mạnh mẽ và dễ sử dụng hơn, đồng thời Node.js đã tích hợp chúng để hỗ trợ các nhà phát triển tốt hơn. Khi làm việc với Node.js, hãy đảm bảo bạn sử dụng phiên bản phù hợp để tận dụng tối đa các tính năng hiện đại này.

