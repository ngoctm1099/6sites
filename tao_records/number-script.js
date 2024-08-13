// Lấy các element
const subscribersElement = document.getElementById("network-subscribers");
const hoursWatchedElement = document.getElementById("hour-watched");
const viewsPerMonthElement = document.getElementById("views-per-month");

// Cài đặt các thông số
const subscribersEnd = 27.0;
const hoursWatchedEnd = 39;
const viewsPerMonthEnd = 150;
const subscribersDuration = 3000; // 3 giây
const hoursWatchedDuration = 5000; // 5 giây
const viewsPerMonthDuration = 7000; // 7 giây

// Tính toán bước nhảy cho mỗi lần cập nhật
const subscribersStep = subscribersEnd / (subscribersDuration / 100);
const hoursWatchedStep = hoursWatchedEnd / (hoursWatchedDuration / 100);
const viewsPerMonthStep = viewsPerMonthEnd / (viewsPerMonthDuration / 100);

// Khởi tạo giá trị hiện tại
let currentSubscribers = 0.0;
let currentHoursWatched = 0;
let currentViewsPerMonth = 0;

// Hàm cập nhật giá trị
function updateValues() {
  currentSubscribers += subscribersStep;
  currentHoursWatched += hoursWatchedStep;
  currentViewsPerMonth += viewsPerMonthStep;

  subscribersElement.textContent = currentSubscribers.toFixed(1) + "M";
  hoursWatchedElement.textContent = currentHoursWatched + "M";
  viewsPerMonthElement.textContent = currentViewsPerMonth + "M";
}

// Bắt đầu cập nhật
const subscribersInterval = setInterval(updateValues, 10);
const hoursWatchedInterval = setInterval(updateValues, 10);
const viewsPerMonthInterval = setInterval(updateValues, 10);

// Dừng các interval khi đạt đến giá trị cuối cùng
clearInterval(subscribersInterval, subscribersDuration);
clearInterval(hoursWatchedInterval, hoursWatchedDuration);
clearInterval(viewsPerMonthInterval, viewsPerMonthDuration);
