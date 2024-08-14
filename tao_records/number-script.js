// Lấy các element
const subscribersElement = document.getElementById("network-subscribers");
const hoursWatchedElement = document.getElementById("hour-watched");
const viewsPerMonthElement = document.getElementById("views-per-month");

// Cài đặt các thông số
const subscribersEnd = 27.0;
const hoursWatchedEnd = 39;
const viewsPerMonthEnd = 150;
const subscribersDuration = 5000;
const hoursWatchedDuration = 5000;
const viewsPerMonthDuration = 5000;

// Tính toán bước nhảy cho mỗi lần cập nhật
const subscribersStep = subscribersEnd / (subscribersDuration / 10);
const hoursWatchedStep = hoursWatchedEnd / (hoursWatchedDuration / 10);
const viewsPerMonthStep = viewsPerMonthEnd / (viewsPerMonthDuration / 10);

// Khởi tạo giá trị hiện tại
let currentSubscribers = 0.0;
let currentHoursWatched = 0;
let currentViewsPerMonth = 0;

// Hàm cập nhật giá trị
function updateValues() {
  if (currentSubscribers < subscribersEnd) {
    currentSubscribers += subscribersStep;
    subscribersElement.textContent = currentSubscribers.toFixed(0) + "M";
  }

  if (currentHoursWatched < hoursWatchedEnd) {
    currentHoursWatched += hoursWatchedStep;
    hoursWatchedElement.textContent = currentHoursWatched.toFixed(0) + "M";
  }

  if (currentViewsPerMonth < viewsPerMonthEnd) {
    currentViewsPerMonth += viewsPerMonthStep;
    viewsPerMonthElement.textContent = currentViewsPerMonth.toFixed(0) + "M";
  }
}

// Bắt đầu cập nhật
const subscribersInterval = setInterval(updateValues, 10);
const hoursWatchedInterval = setInterval(updateValues, 10);
const viewsPerMonthInterval = setInterval(updateValues, 10);

// Dừng các interval khi đạt đến giá trị cuối cùng
setTimeout(() => {
  clearInterval(subscribersInterval);
}, subscribersDuration);
setTimeout(() => {
  clearInterval(hoursWatchedInterval);
}, hoursWatchedDuration);
setTimeout(() => {
  clearInterval(viewsPerMonthInterval);
}, viewsPerMonthDuration);
