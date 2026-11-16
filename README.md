# Smart Water Management System (SWMS)
> Hệ thống Giám sát Cấp nước Thông minh dựa trên công nghệ Internet of Everything (IoE).

## 🚀 Live Demo
Trải nghiệm trực tiếp giao diện tương tác:
👉 **[https://selinavu.github.io/smart-water-management/](https://selinavu.github.io/smart-water-management/)**

---

## 🌟 Tính Năng Chính
1. **Tổng quan Giám sát (Overview Dashboard)**:
   - 4 Thẻ KPI: Tổng lưu lượng cấp ($m^3/h$), Áp lực trung bình ($bar$), Tỷ lệ thất thoát ($NRW\ 12.5\%$), Cảnh báo tức thời.
   - Bản đồ số GIS phân vùng DMA thu nhỏ.
   - Biểu đồ Thủy lực đường đôi: So sánh **Đường Thực Tế (Actual)** và **Đường Định Mức (Baseline)**, tự động khoanh vùng rò rỉ đêm (MNF) và giờ cao điểm.
   - Bảng nhật ký sự cố có tính năng điều động kỹ thuật (Dispatch / Acknowledge).

2. **Bản đồ Mạng lưới GIS (GIS Network)**:
   - Bản đồ phân vùng DMA 1 (Phía Nam), DMA 2 (Trung tâm), DMA 3 (Ven hồ) và Hồ điều hòa.
   - Bật / tắt các lớp layer: Tuyến ống truyền tải D200/D100, Van giảm áp tự động (PRV), Nút cảm biến IoT.

3. **Áp lực & Lưu lượng (Telemetry)**:
   - Giám sát 6 điểm nút quan trắc thủy lực thời gian thực.
   - Cảnh báo sụt áp hoặc tăng áp vượt dải định mức an toàn.

4. **Phát hiện Rò rỉ (NRW & Leak Detection)**:
   - Phân tích lưu lượng tối thiểu ban đêm (MNF - Minimum Night Flow từ 02:00 - 04:00 sáng).
   - Xếp hạng mức độ ưu tiên xử lý rò rỉ theo từng tiểu vùng DMA.

5. **Chất lượng Nước (Water Quality)**:
   - Quan trắc 4 chỉ số hóa lý đạt chuẩn QCVN: Độ đục (NTU), Clo dư, Độ pH, Tổng chất rắn hòa tan (TDS).

6. **Kiểm toán Thất thoát (Water Balance Audit)**:
   - Báo cáo cân bằng nước theo chuẩn mực Hiệp hội Nước Quốc tế (IWA).

---

## 🛠️ Cài Đặt & Chạy Cục Bộ

```bash
# Cài đặt dependencies
npm install

# Khởi chạy máy chủ phát triển
npm run dev

# Đóng gói sản phẩm
npm run build
```
