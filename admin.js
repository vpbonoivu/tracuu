// admin.js

// --- PHẦN ĐẦU FILE ---

// Import các hàm cần thiết từ Firebase SDK (KHÔNG CẦN AUTH NỮA)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
// import { getAuth, onAuthStateChanged, signOut } from "...";  <-- XÓA DÒNG NÀY
import { getFirestore, collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// TODO: Thay thế bằng cấu hình Firebase của bạn
const firebaseConfig = {
    apiKey: "AIzaSyA-1BYFs94_IXw-Hq34dKEjaYGR9ofjwgo",
            authDomain: "tracuutinhthanh.firebaseapp.com",
            projectId: "tracuutinhthanh",
            storageBucket: "tracuutinhthanh.appspot.com",
            messagingSenderId: "702568826931",
            appId: "1:702568826931:web:84c3a510867e17a7adfb46",
            measurementId: "G-YSMS77L1QS"
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);  <-- XÓA DÒNG NÀY
const db = getFirestore(app);

// === BẢO VỆ TRANG: THAY THẾ BẰNG CƠ CHẾ MỚI ===
if (sessionStorage.getItem('isAdminLoggedIn') !== 'true') {
    // Nếu không có "vé thông hành", đá về trang đăng nhập
    window.location.href = 'login.html';
}

// === LẤY CÁC ELEMENT TỪ DOM ===
const provinceTableBody = document.getElementById('province-table-body');
const provinceForm = document.getElementById('province-form');
const formTitle = document.getElementById('form-title');
const editIdInput = document.getElementById('edit-id');
const cancelButton = document.getElementById('cancel-button');
const logoutButton = document.getElementById('logout-button');

let provincesCache = []; // Lưu trữ dữ liệu tỉnh để không phải load lại khi sửa

// === READ: TẢI VÀ HIỂN THỊ DỮ LIỆU ===
const loadProvinces = async () => {
    provinceTableBody.innerHTML = '<tr><td colspan="3">Đang tải...</td></tr>';
    const querySnapshot = await getDocs(collection(db, "provinces"));
    provincesCache = []; // Xóa cache cũ
    provinceTableBody.innerHTML = ''; // Xóa dòng "Đang tải"

    querySnapshot.forEach((doc) => {
        const province = doc.data();
        provincesCache.push({ id: doc.id, ...province }); // Lưu cả ID và dữ liệu

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${province.tenTinh || 'N/A'}</td>
            <td>${province.trungTamHanhChinh || 'N/A'}</td>
            <td class="action-buttons">
                <button class="edit-btn" data-id="${doc.id}">Sửa</button>
                <button class="delete-btn" data-id="${doc.id}">Xóa</button>
            </td>
        `;
        provinceTableBody.appendChild(row);
    });
};

// === CREATE & UPDATE: XỬ LÝ FORM LƯU DỮ LIỆU ===
provinceForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const provinceData = {
        tenTinh: document.getElementById('tenTinh').value,
        thongTinChung: document.getElementById('thongTinChung').value,
        trungTamHanhChinh: document.getElementById('trungTamHanhChinh').value,
        lanhDaoTinh: document.getElementById('lanhDaoTinh').value,
        lanhDaoSo: document.getElementById('lanhDaoSo').value,
        chucVu: document.getElementById('chucVu').value,
        dauMoi: document.getElementById('dauMoi').value,
        ghiChu: document.getElementById('ghiChu').value,
        tenThayThe: document.getElementById('tenThayThe').value,
    };

    const editId = editIdInput.value;

    if (editId) {
        // --- UPDATE ---
        const docRef = doc(db, "provinces", editId);
        await updateDoc(docRef, provinceData);
        alert('Cập nhật thành công!');
    } else {
        // --- CREATE ---
        await addDoc(collection(db, "provinces"), provinceData);
        alert('Thêm mới thành công!');
    }

    resetForm();
    loadProvinces();
});

// === HÀNH ĐỘNG SỬA VÀ XÓA ===
provinceTableBody.addEventListener('click', (e) => {
    const target = e.target;
    const id = target.dataset.id;

    if (target.classList.contains('edit-btn')) {
        // --- EDIT ---
        const provinceToEdit = provincesCache.find(p => p.id === id);
        if (provinceToEdit) {
            formTitle.textContent = 'Sửa Thông Tin Tỉnh';
            editIdInput.value = id;
            document.getElementById('tenTinh').value = provinceToEdit.tenTinh || '';
            document.getElementById('thongTinChung').value = provinceToEdit.thongTinChung || '';
            document.getElementById('trungTamHanhChinh').value = provinceToEdit.trungTamHanhChinh || '';
            document.getElementById('lanhDaoTinh').value = provinceToEdit.lanhDaoTinh || '';
            document.getElementById('lanhDaoSo').value = provinceToEdit.lanhDaoSo || '';
            document.getElementById('chucVu').value = provinceToEdit.chucVu || '';
            document.getElementById('dauMoi').value = provinceToEdit.dauMoi || '';
            document.getElementById('ghiChu').value = provinceToEdit.ghiChu || '';
            document.getElementById('tenThayThe').value = provinceToEdit.tenThayThe || '';
            window.scrollTo(0, 0); // Cuộn lên đầu trang để thấy form
        }
    }

    if (target.classList.contains('delete-btn')) {
        // --- DELETE ---
        if (confirm('Bạn có chắc chắn muốn xóa tỉnh này? Hành động này không thể hoàn tác.')) {
            deleteDocument(id);
        }
    }
});

// Hàm xóa document
const deleteDocument = async (id) => {
    await deleteDoc(doc(db, "provinces", id));
    alert('Xóa thành công!');
    loadProvinces();
};

// Hàm reset form
const resetForm = () => {
    provinceForm.reset();
    editIdInput.value = '';
    formTitle.textContent = 'Thêm Tỉnh Mới';
};

cancelButton.addEventListener('click', resetForm);

// === ĐĂNG XUẤT: THAY THẾ BẰNG CƠ CHẾ MỚI ===
logoutButton.addEventListener('click', () => {
    sessionStorage.removeItem('isAdminLoggedIn');
    window.location.href = 'login.html';
});
// === KHỞI CHẠY: Tải dữ liệu tỉnh ngay khi trang được vào ===
// (Phần bảo vệ ở đầu file đã chạy rồi)
loadProvinces();