const db = [
    {
        "tenTinh": "An Giang",
        "tenThayThe": "an giang",
        "thongTinChung": "AN GIANG (Kiên Giang + An Giang)\nDiện tích: 9,9 nghìn km2\nDân số: 4,952,238 người\nĐơn vị hành chính cấp xã: 102 (gồm 85 xã, 14 phường và 3 đặc khu)",
        "trungTamHanhChinh": "TP. Rạch Giá (Kiên Giang)",
        "lanhDaoTinh": "Ông Nguyễn Tiến Hải - Bí thư Tỉnh ủy An Giang\nÔng Hồ Văn Mừng - Chủ tịch UBND tỉnh An Giang",
        "lanhDaoSo": "Ông Nguyễn Như Anh\nChức vụ: Giám đốc Sở Nội vụ\nNăm sinh: 1973\nSĐT: 0918899160",
        "dauMoi": "Ông Đoàn Bảo Toàn\nChức vụ: Phó Chánh Văn phòng Sở\nSĐT: 0939303305",
        "ghiChu": "Giáp biển; Tỉnh có dân số đông nhất sau sáp nhập với hơn 4,9 triệu người"
    },
    {
        "tenTinh": "Bắc Ninh",
        "tenThayThe": "bắc ninh, bac ninh",
        "thongTinChung": "BẮC NINH (Bắc Ninh + Bắc Giang)\nDiện tích: 4,7 nghìn km2\nDân số: 3,619,433 người\nĐơn vị hành chính cấp xã: 99 (gồm 66 xã, 33 phường)",
        "trungTamHanhChinh": "TP Bắc Giang (Bắc Giang)",
        "lanhDaoTinh": "Ông Nguyễn Văn Gấu - Bí thư Tỉnh ủy Bắc Ninh\nÔng Vương Quốc Tuấn - Chủ tịch UBND tỉnh Bắc Ninh",
        "lanhDaoSo": "Ông Vũ Mạnh Hùng\nChức vụ: Giám đốc Sở Nội vụ\nNăm sinh: 1969\nSĐT: 0982355353",
        "dauMoi": "Ông Nguyễn Tiến Đạt\nChức vụ: Chánh Văn phòng Sở\nSĐT: 0912533888",
        "ghiChu": "Là một trong 4 tỉnh sau sáp nhập có số thu ngân sách trên 50.000 tỉ đồng"
    },
    {
        "tenTinh": "Cà Mau",
        "tenThayThe": "cà mau, ca mau",
        "thongTinChung": "CÀ MAU (Bạc Liêu + Cà Mau)\nDiện tích: 7,9 nghìn km2\nDân số: 2,606,672 người\nĐơn vị hành chính cấp xã: 64 (gồm 55 xã, 09 phường)",
        "trungTamHanhChinh": "TP Cà Mau (Cà Mau)",
        "lanhDaoTinh": "Ông Nguyễn Hồ Hải - Bí thư Tỉnh ủy Cà Mau\nÔng Phạm Thành Ngại - Chủ tịch UBND tỉnh Cà Mau",
        "lanhDaoSo": "Ông Trần Hữu Phước\nChức vụ: Giám đốc Sở Nội vụ\nNăm sinh: 1971\nSĐT: 0919381800",
        "dauMoi": "Ông Đoàn Thanh Thùy\nChức vụ: Chánh Văn phòng Sở\nSĐT: 0913692674",
        "ghiChu": "Giáp biển"
    },
    {
        "tenTinh": "Cao Bằng",
        "tenThayThe": "cao bằng, cao bang",
        "thongTinChung": "CAO BẰNG\nDiện tích: 6,7 nghìn km2\nDân số: 573,119 người\nĐơn vị hành chính cấp xã: 56 (gồm 53 xã, 03 phường)",
        "trungTamHanhChinh": "TP Cao Bằng (Cao Bằng)",
        "lanhDaoTinh": "Ông Quản Minh Cường - Bí thư Tỉnh ủy Cao Bằng\nÔng Lê Hải Hòa - Chủ tịch UBND tỉnh Cao Bằng",
        "lanhDaoSo": "Bà Nguyễn Lâm Thị Tú Anh\nChức vụ: Giám đốc Sở Nội vụ\nNăm sinh: 1971\nSĐT: 0915424739",
        "dauMoi": "Bà Nguyễn Thị Thanh Mai\nChức vụ: Chánh Văn phòng Sở\nSĐT: 0912682292",
        "ghiChu": ""
    },
    {
        "tenTinh": "Đắk Lắk",
        "tenThayThe": "dak lak, dac lac, đắc lắc",
        "thongTinChung": "ĐẮK LẮK (Đắk Lắk + Phú Yên)\nDiện tích: 18,1 nghìn km2\nDân số: 3,346,853 người\nĐơn vị hành chính cấp xã: 102 (gồm 88 xã, 14 phường)\n06 xã giữ nguyên không sắp xếp",
        "trungTamHanhChinh": "TP Buôn Ma Thuột (Đắk Lắk)",
        "lanhDaoTinh": "Ông Nguyễn Đình Trung - Bí thư Tỉnh ủy Đắk Lắk\nÔng Tạ Anh Tuấn - Chủ tịch UBND tỉnh Đắk Lắk",
        "lanhDaoSo": "Ông Trương Ngọc Tuấn\nChức vụ: Giám đốc Sở Nội vụ\nNăm sinh: 1977\nSĐT: 0914731189",
        "dauMoi": "Ông Nguyễn Thành Long\nChức vụ: Chánh Văn phòng Sở\nSĐT: 0905156616",
        "ghiChu": "Giáp biển"
    },
    {
        "tenTinh": "Điện Biên",
        "tenThayThe": "điện biên, dien bien",
        "thongTinChung": "ĐIỆN BIÊN\nDiện tích: 9,5 nghìn km2\nDân số: 673,091 người\nĐơn vị hành chính cấp xã: 45 (gồm 42 xã, 3 phường)",
        "trungTamHanhChinh": "TP Điện Biên Phủ (Điện Biên)",
        "lanhDaoTinh": "Ông Trần Quốc Cường - Bí thư Tỉnh ủy Điện Biên\nÔng Lê Thành Đô - Chủ tịch UBND tỉnh Điện Biên",
        "lanhDaoSo": "Ông Nguyễn Tiến Đạt\nChức vụ: Giám đốc Sở Nội vụ\nNăm sinh: 1973\nSĐT: 0988208869",
        "dauMoi": "Bà Nguyễn Hồng Ngọc\nChức vụ: Chánh Văn phòng Sở\nSĐT: 0919252889",
        "ghiChu": ""
    },
    {
        "tenTinh": "Đồng Nai",
        "tenThayThe": "đồng nai, dong nai",
        "thongTinChung": "ĐỒNG NAI (Đồng Nai + Bình Phước)\nDiện tích: 12,7 nghìn km2\nDân số: 4,491,408 người\nĐơn vị hành chính cấp xã: 95 (gồm 72 xã, 23 phường)",
        "trungTamHanhChinh": "TP Biên Hòa (Đồng Nai)",
        "lanhDaoTinh": "Ông Vũ Hồng Văn - Bí thư Tỉnh ủy Đồng Nai\nÔng Võ Tấn Đức - Chủ tịch UBND tỉnh Đồng Nai",
        "lanhDaoSo": "Ông Nguyễn Hữu Định\nChức vụ: Giám đốc Sở Nội vụ\nNăm sinh: 1977\nSĐT: 0913685369",
        "dauMoi": "Ông Nguyễn Hồng Sơn\nChức vụ: Chánh Văn phòng Sở\nSĐT: 0986546530",
        "ghiChu": "Là tỉnh đứng đầu thu ngân sách trong các tỉnh; 2024 là hơn 73.000 tỉ đồng, GRDP đạt hơn 609.000 tỉ đồng"
    },
    {
        "tenTinh": "Đồng Tháp",
        "tenThayThe": "đồng tháp, dong thap",
        "thongTinChung": "ĐỒNG THÁP (Đồng Tháp + Tiên Giang)\nDiện tích: 5,9 nghìn km2\nDân số: 4,370,046 người\nĐơn vị hành chính cấp xã: 102 (gồm 82 xã, 20 phường)",
        "trungTamHanhChinh": "TP Mỹ Tho (Tiền Giang)",
        "lanhDaoTinh": "Ông Lê Quốc Phong - Bí thư Tỉnh ủy Đồng Tháp\nÔng Trần Trí Quang - Chủ tịch UBND tỉnh Đồng Tháp",
        "lanhDaoSo": "Ông Nguyễn Văn Vũ Minh\nChức vụ: Giám đốc Sở Nội vụ\nNăm sinh: 1983\nSĐT: 0919906264",
        "dauMoi": "Bà Nguyễn Thị Minh Thùy\nChức vụ: Trưởng phòng XDCQ\nSĐT: 0933538729",
        "ghiChu": "Giáp biển"
    },
    {
        "tenTinh": "Gia Lai",
        "tenThayThe": "gia lai",
        "thongTinChung": "GIA LAI (Gia Lai + Bình Định)\nDiện tích: 21,6 nghìn km2\nDân số: 3,583,693 người\nĐơn vị hành chính cấp xã: 135 (gồm 110 xã, 25 phường)",
        "trungTamHanhChinh": "TP Quy Nhơn (Bình Định)",
        "lanhDaoTinh": "Ông Hồ Quốc Dũng - Bí thư Tỉnh ủy Gia Lai\nÔng Phạm Anh Tuấn - Chủ tịch UBND tỉnh Gia Lai",
        "lanhDaoSo": "Bà Phạm Thị Tố Hải\nChức vụ: Giám đốc Sở Nội vụ\nNăm sinh: 1973\nSĐT: 0914305779",
        "dauMoi": "Bà Nguyễn Thị Thanh Nhã\nChức vụ: Phó Chánh Văn phòng Sở\nSĐT: 0905832736",
        "ghiChu": "Giáp biển"
    },
    {
        "tenTinh": "Hà Tĩnh",
        "tenThayThe": "hà tĩnh, ha tinh",
        "thongTinChung": "HÀ TĨNH\nDiện tích: 6 nghìn km2\nDân số: 1,622,901 người\nĐơn vị hành chính cấp xã: 69 (gồm 60 xã và 9 phường)\n2 xã giữ nguyên không thực hiện sắp xếp",
        "trungTamHanhChinh": "TP Hà Tĩnh (Hà Tĩnh)",
        "lanhDaoTinh": "Ông Nguyễn Duy Lâm - Bí thư Tỉnh ủy Hà Tĩnh\nÔng Võ Trọng Hải - Chủ tịch UBND tỉnh Hà Tĩnh",
        "lanhDaoSo": "Ông Trịnh Văn Ngọc\nChức vụ: Phó Giám đốc Sở Nội vụ\nNăm sinh: 1970\nSĐT: 0913071314",
        "dauMoi": "Ông Đoàn Xuân Hoài\nChức vụ: Phó Chánh Văn phòng phụ trách\nSĐT: 0949082882",
        "ghiChu": "Giáp biển"
    },
    {
        "tenTinh": "Hưng Yên",
        "tenThayThe": "hưng yên, hung yen",
        "thongTinChung": "HƯNG YÊN (Hưng Yên + Thái Bình)\nDiện tích: 2,5 nghìn km2\nDân số: 3,567,943 người\nĐơn vị hành chính cấp xã: 104 (gồm 93 xã + xã 11 phường)",
        "trungTamHanhChinh": "TP Hưng Yên (Hưng Yên)",
        "lanhDaoTinh": "Ông Nguyễn Hữu Nghĩa - Bí thư Tỉnh ủy Hưng Yên\nÔng Nguyễn Khắc Thận - Chủ tịch UBND tỉnh Hưng Yên",
        "lanhDaoSo": "Ông Đào Hồng Vận\nChức vụ: Giám đốc Sở Nội vụ\nNăm sinh: 1973\nSĐT: 0913375507",
        "dauMoi": "Ông Vũ Trường Giang\nChức vụ: Chánh Văn phòng Sở\nSĐT: 0949723787",
        "ghiChu": "Giáp biển; là Tỉnh có diện tích nhỏ nhất cả nước sau sáp nhập với 2.515km2; là một trong 4 tỉnh sau sáp nhập có số thu ngân sách trên 50.000 tỉ đồng"
    },
    {
        "tenTinh": "Khánh Hòa",
        "tenThayThe": "khánh hòa, khanh hoa",
        "thongTinChung": "KHÁNH HÒA (Khánh Hòa + Ninh Thuận)\nDiện tích: 8,6 nghìn km2\nDân số: 2,243,554 người\nĐơn vị hành chính cấp xã: 65 (gồm 48 xã, 16 phường và 1 đặc khu)",
        "trungTamHanhChinh": "TP Nha Trang (Khánh Hoà)",
        "lanhDaoTinh": "Ông Nghiêm Xuân Thành - Bí thư Tỉnh ủy Khánh Hòa\nÔng Trần Quốc Nam - Chủ tịch UBND tỉnh Khánh Hòa",
        "lanhDaoSo": "Ông Võ Chí Vương\nChức vụ: Giám đốc Sở Nội vụ\nNăm sinh: 1979\nSĐT: 0905128584",
        "dauMoi": "Ông Đào Thành Cầu\nChức vụ: Phó Chánh Văn phòng Sở\nSĐT: 0983160472",
        "ghiChu": "Giáp biển"
    },
    {
        "tenTinh": "Lai Châu",
        "tenThayThe": "lai châu, lai chau",
        "thongTinChung": "LAI CHÂU\nDiện tích: 9,1 nghìn km2\nDân số: 512,601 người\nĐơn vị hành chính cấp xã: 38 (gồm 36 xã, 2 phường)",
        "trungTamHanhChinh": "TP Lai Châu (Lai Châu)",
        "lanhDaoTinh": "Bà Giàng Páo Mỷ - Bí thư Tỉnh ủy Lai Châu\nÔng Lê Văn Lương - Chủ tịch UBND tỉnh Lai Châu",
        "lanhDaoSo": "Bà Đào Thị Lan Anh\nChức vụ: Giám đốc Sở Nội vụ\nNăm sinh: 1983\nSĐT: 09168814757",
        "dauMoi": "Bà Vũ Thị Vân Anh\nChức vụ: Trưởng phòng Tổ chức biên chế\nSĐT: 0988406487",
        "ghiChu": "Tỉnh có dân số ít nhất với 512.000 người; mật độ dân số thấp, chỉ 56 người/km2"
    },
    {
        "tenTinh": "Lạng Sơn",
        "tenThayThe": "lạng sơn, lang son",
        "thongTinChung": "LẠNG SƠN\nDiện tích: 8,3 nghìn km2\nDân số: 881,384 người\nĐơn vị hành chính cấp xã: 65 (gồm 61 xã và 4 phường)",
        "trungTamHanhChinh": "TP Lạng Sơn (Lạng Sơn)",
        "lanhDaoTinh": "Ông Hoàng Văn Nghiệm - Bí thư Tỉnh ủy Lạng Sơn\nÔng Hồ Tiến Thiệu - Chủ tịch UBND tỉnh Lạng Sơn",
        "lanhDaoSo": "Bà Hoàng Thị Hiền\nChức vụ: Giám đốc Sở Nội vụ\nNăm sinh: 1972\nSĐT: 0912618443",
        "dauMoi": "Ông Trần Văn Ba\nChức vụ: Chánh Văn phòng Sở\nSĐT: 0919191628",
        "ghiChu": ""
    },
    {
        "tenTinh": "Lào Cai",
        "tenThayThe": "lào cai, lao cai",
        "thongTinChung": "LÀO CAI (Lào Cai + Yên Bái)\nDiện tích: 13,3 nghìn km2\nDân số: 1,778,785 người\nĐơn vị hành chính cấp xã: 99 (gồm 89 xã và 10 phường)",
        "trungTamHanhChinh": "TP Yên Bái (Yên Bái)",
        "lanhDaoTinh": "Ông Trịnh Xuân Trường - Bí thư Tỉnh ủy Lào Cai\nÔng Trần Huy Tuấn - Chủ tịch UBND tỉnh Lào Cai",
        "lanhDaoSo": "Ông Nguyễn Văn Trọng\nChức vụ: Giám đốc Sở Nội vụ\nNăm sinh: 1972\nSĐT: 0888036699",
        "dauMoi": "1. Trần Kiên, Chánh Văn phòng Sở, 0888122288\n2. Bùi Duy Linh, Trưởng phòng Kế hoạch - Tổng hợp, 0914876567",
        "ghiChu": ""
    },
    {
        "tenTinh": "Lâm Đồng",
        "tenThayThe": "lâm đồng, lam dong",
        "thongTinChung": "LÂM ĐỒNG (Lâm Đồng + Bình Thuận + Đắk Nông)\nDiện tích: 24,2 nghìn km2\nDân số: 3,872,999 người\nĐơn vị hành chính cấp xã: 124 (gồm 103 xã, 20 phường, 1 đặc khu)",
        "trungTamHanhChinh": "TP Đà Lạt (Lâm Đồng)",
        "lanhDaoTinh": "Ông Y Thanh Hà Niê K’Đăm - Bí thư Tỉnh ủy Lâm Đồng\nÔng Hồ Văn Mười - Chủ tịch UBND tỉnh Lâm Đồng",
        "lanhDaoSo": "Ông Đỗ Văn Chung\nChức vụ: Giám đốc Sở Nội vụ\nNăm sinh: 1978\nSĐT: 0913883654",
        "dauMoi": "1. Trần Thanh Thuần, Chánh Văn phòng Sở, 0979897246\n2. Phạm Phi Thăng, TP XDCP, 0947900279",
        "ghiChu": "Giáp biển; là tỉnh có diện tích lớn nhất cả nước, với hơn 24.233km2"
    },
    {
        "tenTinh": "Nghệ An",
        "tenThayThe": "nghệ an, nghe an",
        "thongTinChung": "NGHỆ AN\nDiện tích: 16,5 nghìn km2\nDân số: 3,831,694 người\nĐơn vị hành chính cấp xã: 130 (gồm 119 xã, 11 phường)",
        "trungTamHanhChinh": "TP Vinh (Nghệ An)",
        "lanhDaoTinh": "Ông Nguyễn Đức Trung - Bí thư Tỉnh ủy Nghệ An\nÔng Lê Hồng Vinh - Chủ tịch UBND tỉnh Nghệ An",
        "lanhDaoSo": "Ông Nguyễn Viết Hưng\nChức vụ: Giám đốc Sở Nội vụ\nNăm sinh: 1973\nSĐT: 0912435653",
        "dauMoi": "Tô Viết Sáu\nChức vụ: Chánh Văn phòng Sở\nSĐT: 0913274087",
        "ghiChu": "Giáp biển"
    },
    {
        "tenTinh": "Ninh Bình",
        "tenThayThe": "ninh bình, ninh binh",
        "thongTinChung": "NINH BÌNH (Hà Nam + Ninh Bình + Nam Định)\nDiện tích: 3,9 nghìn km2\nDân số: 4,412,264 người\nĐơn vị hành chính cấp xã: 129 (gồm 97 xã và 32 phường)",
        "trungTamHanhChinh": "TP Hoa Lư (Ninh Bình)",
        "lanhDaoTinh": "Ông Trương Quốc Huy - Bí thư Tỉnh ủy Ninh Bình\nÔng Phạm Quang Ngọc - Chủ tịch UBND tỉnh Ninh Bình",
        "lanhDaoSo": "Ông Bùi Văn Hoàng\nChức vụ: Giám đốc Sở Nội vụ\nNăm sinh: 1975\nSĐT: 0912139175",
        "dauMoi": "Ông Vũ Văn Kiên\nChức vụ: Chánh Văn phòng Sở\nSĐT: 0888618333",
        "ghiChu": "Giáp biển; là một trong 4 tỉnh sau sáp nhập có số thu ngân sách trên 50.000 tỉ đồng"
    },
    {
        "tenTinh": "Phú Thọ",
        "tenThayThe": "phú thọ, phu tho",
        "thongTinChung": "PHÚ THỌ (Vĩnh Phúc + Phú Thọ + Hòa Bình)\nDiện tích: 9,4 nghìn km2\nDân số: 4,022,638 người\nĐơn vị hành chính cấp xã: 148 (gồm 133 xã, 15 phường)",
        "trungTamHanhChinh": "TP Việt Trì (Phú Thọ)",
        "lanhDaoTinh": "Ông Đặng Xuân Phong - Bí thư Tỉnh ủy Phú Thọ\nÔng Trần Duy Đông - Chủ tịch UBND tỉnh Phú Thọ",
        "lanhDaoSo": "Ông Trần Việt Cường\nChức vụ: Giám đốc Sở Nội vụ\nNăm sinh: 1973\nSĐT: 0816169999",
        "dauMoi": "Đ/c Hòa\nChức vụ: Chánh Văn phòng Sở\nSĐT: 0906230123",
        "ghiChu": "Là tỉnh tiếp giáp nhiều tỉnh, thành khác nhất với 7 tỉnh, thành gồm: Hà Nội, Ninh Bình, Thanh Hóa, Sơn La, Lào Cai, Tuyên Quang, Thái Nguyên"
    },
    {
        "tenTinh": "Quảng Ngãi",
        "tenThayThe": "quảng ngãi, quang ngai",
        "thongTinChung": "QUẢNG NGÃI (Kon Tum + Quảng Ngãi)\nDiện tích: 14,8 nghìn km2\nDân số: 2,161,755 người\nĐơn vị hành chính cấp xã: 96 (gồm 81 xã, 9 phường và 1 đặc khu)",
        "trungTamHanhChinh": "TP Quảng Ngãi (Quảng Ngãi)",
        "lanhDaoTinh": "Bà Bùi Thị Quỳnh Vân - Bí thư Tỉnh ủy Quảng Ngãi\nÔng Nguyễn Hoàng Giang - Chủ tịch UBND tỉnh Quảng Ngãi",
        "lanhDaoSo": "Ông Tạ Công Dũng\nChức vụ: Giám đốc Sở Nội vụ\nNăm sinh: 1969\nSĐT: 0914028022",
        "dauMoi": "Ông Nguyễn Hồng Hậu\nChức vụ: Chánh Văn phòng Sở\nSĐT: 0938118176",
        "ghiChu": "Giáp biển"
    },
    {
        "tenTinh": "Quảng Ninh",
        "tenThayThe": "quảng ninh, quang ninh",
        "thongTinChung": "QUẢNG NINH\nDiện tích: 6,2 nghìn km2\nDân số: 1,497,447 người\nĐơn vị hành chính cấp xã: 54 (gồm 22 xã, 30 phường và 2 đặc khu)",
        "trungTamHanhChinh": "TP Hạ Long (Quảng Ninh)",
        "lanhDaoTinh": "Ông Vũ Đại Thắng - Bí thư Tỉnh ủy Quảng Ninh\nÔng Phạm Đức Ấn - Chủ tịch UBND tỉnh Quảng Ninh",
        "lanhDaoSo": "Bà Bùi Thị Bính\nChức vụ: Giám đốc Sở Nội vụ\nNăm sinh: 1971\nSĐT: 0913021499",
        "dauMoi": "Bà Nguyễn Thị Trang Nhung\nChức vụ: Chánh Văn phòng Sở\nSĐT: 0911761686",
        "ghiChu": "Giáp biển; là một trong 4 tỉnh sau sáp nhập có số thu ngân sách trên 50.000 tỉ đồng"
    },
    {
        "tenTinh": "Quảng Trị",
        "tenThayThe": "quảng trị, quang tri",
        "thongTinChung": "QUẢNG TRỊ (Quảng Bình + Quảng Trị)\nDiện tích: 12,7 nghìn km2\nDân số: 1,870,845 người\nĐơn vị hành chính cấp xã: 78 (gồm 69 xã, 8 phường và 1 đặc khu)",
        "trungTamHanhChinh": "TP Đồng Hới (Quảng Bình)",
        "lanhDaoTinh": "Ông Lê Ngọc Quang - Bí thư Tỉnh ủy Quảng Trị\nÔng Trần Phong - Chủ tịch UBND tỉnh Quảng Trị",
        "lanhDaoSo": "Bà Lê Thị Thanh\nChức vụ: Giám đốc Sở Nội vụ\nNăm sinh: 1975\nSĐT: 0988797353",
        "dauMoi": "Bà Lê Thị Linh\nChức vụ: Chánh Văn phòng Sở\nSĐT: 0913233779",
        "ghiChu": "Giáp biển"
    },
    {
        "tenTinh": "Sơn La",
        "tenThayThe": "sơn la, son la",
        "thongTinChung": "SƠN LA\nDiện tích: 14,1 nghìn km2\nDân số: 1,404,587 người\nĐơn vị hành chính cấp xã: 75 (gồm 67 xã, 8 phường)",
        "trungTamHanhChinh": "TP Sơn La (Sơn La)",
        "lanhDaoTinh": "Ông Hoàng Quốc Khánh - Bí thư Tỉnh ủy Sơn La\nÔng Nguyễn Đình Việt - Chủ tịch UBND tỉnh Sơn La",
        "lanhDaoSo": "Bà Lương Thị Như Hoa\nChức vụ: Giám đốc Sở Nội vụ\nNăm sinh: 1975\nSĐT: 0977998886",
        "dauMoi": "1. Nguyễn Thanh Tịnh, Phó Giám đốc Sở, 0904315850\n2. Lường Thúy An, Phó Chánh Văn phòng phụ trách, 0914867188",
        "ghiChu": ""
    },
    {
        "tenTinh": "Tây Ninh",
        "tenThayThe": "tây ninh, tay ninh",
        "thongTinChung": "TÂY NINH (Tây Ninh + Long An)\nDiện tích: 8,5 nghìn km2\nDân số: 3,254,170 người\nĐơn vị hành chính cấp xã: 96 (gồm 82 xã, 14 phường)",
        "trungTamHanhChinh": "TP Tân An (Long An)",
        "lanhDaoTinh": "Ông Nguyễn Văn Quyết - Bí thư Tỉnh ủy Tây Ninh\nÔng Nguyễn Văn Út - Chủ tịch UBND tỉnh Tây Ninh",
        "lanhDaoSo": "Ông Phạm Xuân Bách\nChức vụ: Giám đốc Sở Nội vụ\nNăm sinh: 1981\nSĐT: 0918955475",
        "dauMoi": "1. Nguyễn Xuân Minh, Chánh Văn phòng Sở, 0967071738\n2. Nguyễn Hoàng Minh, PGĐ, 0918885377",
        "ghiChu": ""
    },
    {
        "tenTinh": "Thái Nguyên",
        "tenThayThe": "thái nguyên, thai nguyen",
        "thongTinChung": "THÁI NGUYÊN (Bắc Kạn + Thái Nguyên)\nDiện tích: 8,4 nghìn km2\nDân số: 1,799,489 người\nĐơn vị hành chính cấp xã: 92 (gồm 77 xã, 15 phường)",
        "trungTamHanhChinh": "TP Thái Nguyên (Thái Nguyên)",
        "lanhDaoTinh": "Ông Trịnh Việt Hùng - Bí thư Tỉnh ủy Thái Nguyên\nÔng Phạm Hoàng Sơn - Chủ tịch UBND tỉnh Thái Nguyên",
        "lanhDaoSo": "Ông Nguyễn Quốc Hữu\nChức vụ: Giám đốc Sở Nội vụ\nNăm sinh: 1977\nSĐT: 0989090007",
        "dauMoi": "Chánh Văn phòng Sở, 0913509360",
        "ghiChu": ""
    },
    {
        "tenTinh": "Thanh Hóa",
        "tenThayThe": "thanh hóa, thanh hoa",
        "thongTinChung": "THANH HÓA\nDiện tích: 11,1 nghìn km2\nDân số: 4,324,783 người\nĐơn vị hành chính cấp xã: 166 (gồm 147 xã, 19 phường)",
        "trungTamHanhChinh": "TP Thanh Hóa (Thanh Hóa)",
        "lanhDaoTinh": "Ông Nguyễn Doãn Anh - Bí thư Tỉnh ủy Thanh Hoá\nÔng Đỗ Minh Tuấn - Chủ tịch UBND tỉnh Thanh Hoá",
        "lanhDaoSo": "Ông Trần Quốc Huy\nChức vụ: Giám đốc Sở Nội vụ\nNăm sinh: 1967\nSĐT: 0903456018",
        "dauMoi": "Ông Lê Tiến Hải\nChức vụ: Chánh Văn phòng Sở\nSĐT: 0787898868",
        "ghiChu": "Giáp biển; là tỉnh đứng thứ hai về thu ngân sách trong các tỉnh, với số liệu năm 2024 là hơn 56.000 tỉ đồng."
    },
    {
        "tenTinh": "Thành phố Cần Thơ",
        "tenThayThe": "Cần Thơ, cần thơ, can tho",
        "thongTinChung": "CẦN THƠ (Cần Thơ + Sóc Trăng + Hậu Giang)\nDiện tích: 6,4 nghìn km2\nDân số: 4,199,824 người\nĐơn vị hành chính cấp xã: 103 (gồm 65 xã, 30 phường)",
        "trungTamHanhChinh": "Ninh Kiều (Cần Thơ)",
        "lanhDaoTinh": "Ông Đỗ Thanh Bình - Bí thư Thành ủy Cần Thơ\nÔng Trần Văn Lâu - Chủ tịch UBND TP Cần Thơ",
        "lanhDaoSo": "Ông Trần Thanh Liêm\nChức vụ: Quyền Giám đốc Sở Nội vụ\nNăm sinh: 1970\nSĐT: 0919129723",
        "dauMoi": "Ông Trương Hoài Phụng\nChức vụ: Phó Trưởng phòng TCCB\nSĐT: 0913770599",
        "ghiChu": "Tp trực thuộc TW; giáp biển"
    },
    {
        "tenTinh": "Thành phố Đà Nẵng",
        "tenThayThe": "Đà Nẵng, đà nẵng, da nang",
        "thongTinChung": "ĐÀ NẴNG (Đà Nẵng + Quảng Nam)\nDiện tích: 11,9 nghìn km2\nDân số: 3,065,628 người\nĐơn vị hành chính cấp xã: 94 (gồm 70 xã, 23 phường và 01 đặc khu)",
        "trungTamHanhChinh": "Hải Châu (Đà Nẵng)",
        "lanhDaoTinh": "Ông Nguyễn Văn Quảng - Bí thư Thành ủy Đà Nẵng\nÔng Lương Nguyễn Minh Triết - Chủ tịch UBND TP Đà Nẵng",
        "lanhDaoSo": "Ông Phan Văn Bình\nChức vụ: Giám đốc Sở Nội vụ\nNăm sinh: 1981\nSĐT: 0936832299",
        "dauMoi": "Đ/c Hồng Nhung\nChức vụ: Chánh Văn phòng Sở\nSĐT: 0905246111",
        "ghiChu": "Tp trực thuộc TW; là TP có diện tích lớn nhất trong 6 TP trực thuộc TW; giáp biển"
    },
    {
        "tenTinh": "Thành phố Hà Nội",
        "tenThayThe": "Hà Nội, hà nội, ha noi, hn",
        "thongTinChung": "HÀ NỘI\nDiện tích: 3,4 nghìn km2\nDân số: 8,807,523 người\nĐơn vị hành chính cấp xã: 126 (gồm 75 xã, 51 phường)",
        "trungTamHanhChinh": "Hoàn Kiếm (Hà Nội)",
        "lanhDaoTinh": "Bà Bùi Thị Minh Hoài - Bí thư Thành ủy Hà Nội\nÔng Trần Sỹ Thanh - Chủ tịch UBND TP Hà Nội",
        "lanhDaoSo": "Ông Trần Đình Cảnh\nChức vụ: Phó Giám đốc Sở Nội vụ\nNăm sinh: 1974\nSĐT: 0913514827",
        "dauMoi": "Ông Nguyễn Dương Chung\nChức vụ: Phó Chánh Văn phòng Sở\nSĐT: 0988085795",
        "ghiChu": "Tp trực thuộc TW; đứng thứ hai cả nước về thu ngân sách (sau Tp. HCM)"
    },
    {
        "tenTinh": "Thành phố Hải Phòng",
        "tenThayThe": "Hải Phòng, hải phòng, hai phong, hp",
        "thongTinChung": "HẢI PHÒNG (Hải Phòng + Hải Dương)\nDiện tích: 3,2 nghìn km2\nDân số: 4,664,124 người\nĐơn vị hành chính cấp xã: 114 (gồm 67 xã + phường 45 phường và 2 đặc khu)",
        "trungTamHanhChinh": "TP Thủy Nguyên (Hải Phòng)",
        "lanhDaoTinh": "Ông Lê Tiến Châu - Bí thư Thành ủy Hải Phòng\nÔng Lê Ngọc Châu - Chủ tịch UBND TP Hải Phòng",
        "lanhDaoSo": "Ông Vũ Tiến Phụng\nChức vụ: Phó Giám đốc Sở Nội vụ\nNăm sinh: 1972\nSĐT: 0983020039",
        "dauMoi": "Ông Hoàng Hải Hà\nChức vụ: Phó Chánh Văn phòng Sở\nSĐT: 0966699319",
        "ghiChu": "Tp trực thuộc TW; là TP có diện tích nhỏ nhất trong 6 TP trực thuộc TW; quy mô kinh tế lớn thứ hai cả nước (sau Tp.HCM); giáp biển"
    },
    {
        "tenTinh": "Thành phố Hồ Chí Minh",
        "tenThayThe": "Hồ Chí Minh, hồ chính minh, ho chi minh, tphcm, hcm",
        "thongTinChung": "TP HỒ CHÍ MINH (Bà Rịa - Vũng Tàu + Bình Dương + TP Hồ Chí Minh)\nDiện tích: 6,8 nghìn km2\nDân số: 14,002,598 người\nĐơn vị hành chính cấp xã: 168 (gồm 113 phường, 54 xã, 01 đặc khu)",
        "trungTamHanhChinh": "Quận 1 (TP Hồ Chí Minh)",
        "lanhDaoTinh": "Ông Nguyễn Văn Nên - Bí thư Thành ủy TP.HCM\nÔng Nguyễn Văn Được - Chủ tịch UBND TP TP.HCM",
        "lanhDaoSo": "Bà Phạm Thị Thanh Hiền\nChức vụ: Giám đốc Sở Nội vụ\nNăm sinh: 1979\nSĐT: 0983434710",
        "dauMoi": "Bà Nguyễn Hồng Vân, Trưởng phòng",
        "ghiChu": "Tp trực thuộc TW; là TP có diện tích lớn thứ hai trong 6 TP trực thuộc TW; đông dân nhất cả nước với hơn 14 triệu người; quy mô kinh tế lớn nhất cả nước; giáp biển"
    },
    {
        "tenTinh": "Thành phố Huế",
        "tenThayThe": "Huế, huế, hue",
        "thongTinChung": "HUẾ\nDiện tích: 4,9 nghìn km2\nDân số: 1,432,986 người\nĐơn vị hành chính cấp xã: 40 (gồm 19 xã, 21 phường)",
        "trungTamHanhChinh": "Phú Xuân (Huế)",
        "lanhDaoTinh": "Ông Lê Trường Lưu - Bí thư Thành ủy Huế\nÔng Nguyễn Văn Phương - Chủ tịch UBND TP Huế",
        "lanhDaoSo": "Ông Nguyễn Văn Mạnh\nChức vụ: Giám đốc Sở Nội vụ\nNăm sinh: 1976\nSĐT: 0914145186",
        "dauMoi": "Ông Trần Quốc Sinh\nChức vụ: Chánh Văn phòng Sở\nSĐT: 0912192336",
        "ghiChu": "Tp trực thuộc TW; giáp biển"
    },
    {
        "tenTinh": "Tuyên Quang",
        "tenThayThe": "tuyên quang, tuyen quang",
        "thongTinChung": "TUYÊN QUANG (Tuyên Quang + Hà Giang)\nDiện tích: 13,8 nghìn km2\nDân số: 1,865,270 người\nĐơn vị hành chính cấp xã: 124 (gồm 117 xã, 7 phường)",
        "trungTamHanhChinh": "TP Tuyên Quang (Tuyên Quang)",
        "lanhDaoTinh": "Ông Hầu A Lềnh - Bí thư Tỉnh ủy Tuyên Quang\nÔng Phan Huy Ngọc - Chủ tịch UBND tỉnh Tuyên Quang",
        "lanhDaoSo": "Ông Đỗ Anh Tuấn\nChức vụ: Giám đốc Sở Nội vụ\nNăm sinh: 1977\nSĐT: 0983545126",
        "dauMoi": "1. Lê Văn Đạt, Phó Giám đốc Sở, 0949099388\n2. Lê Quốc Huân, Chánh Văn phòng Sở, 0987105312",
        "ghiChu": ""
    },
    {
        "tenTinh": "Vĩnh Long",
        "tenThayThe": "vĩnh long, vinh long",
        "thongTinChung": "VĨNH LONG (Bến Tre + Vĩnh Long + Trà Vinh)\nDiện tích: 6,3 nghìn km2\nDân số: 4,257,581 người\nĐơn vị hành chính cấp xã: 124 (gồm 19 phường, 105 xã)",
        "trungTamHanhChinh": "TP Vĩnh Long (Vĩnh Long)",
        "lanhDaoTinh": "Ông Ngô Chí Cường - Bí thư Tỉnh ủy Vĩnh Long\nÔng Lữ Quang Ngời - Chủ tịch UBND tỉnh Vĩnh Long",
        "lanhDaoSo": "Bà Nguyễn Thị Ngọc Giàu\nChức vụ: Giám đốc Sở Nội vụ\nNăm sinh: 1984\nSĐT: 0919978225",
        "dauMoi": "Ông Nguyễn Văn Châu\nChức vụ: Chánh Văn phòng Sở\nSĐT: 0919104033",
        "ghiChu": "Giáp biển"
    }
];