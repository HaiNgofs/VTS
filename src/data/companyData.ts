import { Service, Project, NewsItem, Milestone } from '../types';

export const COMPANY_INFO = {
  name: 'CÔNG TY TNHH TƯ VẤN VÀ XÂY DỰNG VTS',
  nameEng: 'VTS CONSULTING AND CONSTRUCTION LIMITED LIABILITY COMPANY',
  shortName: 'VTS CONSULTING & CONSTRUCTION',
  foundingYear: '2019',
  hotline: '0966643111',
  phoneDisplay: '0966.643.111',
  email: 'vts.company.ltd@gmail.com',
  address: 'Số 26, Ngõ 82, Phố Tân Ấp, Phường Hồng Hà, Thành phố Hà Nội.',
  city: 'Hà Nội',
  workingHours: 'Thứ 2 - Thứ 7: 08:00 - 17:30',
  slogan: 'Uy tín – Chất lượng – Hiệu quả',
  shortIntro: `CÔNG TY TNHH TƯ VẤN VÀ XÂY DỰNG VTS là đơn vị hoạt động trong lĩnh vực tư vấn, thiết kế, thi công và cung cấp giải pháp kỹ thuật cho các công trình xây dựng và phòng cháy chữa cháy. Với đội ngũ kỹ sư giàu kinh nghiệm cùng quy trình làm việc chuyên nghiệp, VTS luôn mang đến cho khách hàng những giải pháp tối ưu, đảm bảo chất lượng, tiến độ và hiệu quả đầu tư. Chúng tôi cam kết lấy Uy tín – Chất lượng – Hiệu quả làm nền tảng để đồng hành cùng khách hàng và đối tác trong mọi dự án.`,
  fullHistory: [
    {
      period: 'Năm 2019: Khởi đầu và định hình phát triển',
      content: 'Công ty TNHH Tư vấn và Xây dựng VTS được thành lập từ năm 2019. Ban đầu, công ty chỉ có 2 nhân viên với một vài công trình tư vấn giám sát cho một số công trình cải tạo, sửa chữa của cơ quan nhà nước như Kho bạc Nhà nước Hà Nội, Ủy ban Giám sát Tài chính Quốc gia và Trung tâm điều dưỡng người có công Hà Nội,…'
    },
    {
      period: 'Năm 2021 - 2022: Vượt qua thách thức đại dịch',
      content: 'Công ty đã trải qua những giai đoạn hết sức khó khăn do ảnh hưởng của đại dịch Covid-19 trong những năm 2021, 2022. Tuy nhiên, trong giai đoạn này, Công ty vẫn không ngừng nỗ lực học hỏi, nâng cao năng lực chuyên môn, chuẩn bị tiền đề nguồn lực và kỹ thuật cần thiết cho giai đoạn bứt phá tiếp theo.'
    },
    {
      period: 'Năm 2023: Bước ngoặt phát triển với Dự án Bệnh viện TNH Việt Yên',
      content: 'Từ năm 2023, liên danh với Công ty Cổ phần Tư vấn và Đầu tư HCT, Công ty đã chính thức có những hợp đồng tư vấn giám sát các công trình có quy mô lớn như Dự án xây dựng Bệnh viện TNH Việt Yên (quy mô 15 tầng, 300 giường bệnh, diện tích hơn 5.000 m² với tổng mức đầu tư 618 tỷ đồng). Uy tín và chất lượng của công ty đã ngày càng được khẳng định bằng sự tin tưởng của khách hàng.'
    },
    {
      period: 'Năm 2024: Khẳng định thương hiệu & Mở rộng Thi công PCCC',
      content: 'Đến đầu năm 2024, Công ty tiếp tục được chủ đầu tư lựa chọn để thực hiện gói thầu tư vấn giám sát Dự án Bệnh viện TNH Lạng Sơn (quy mô 300 giường bệnh, diện tích 9.278,5 m² với tổng mức đầu tư gần 900 tỷ đồng). Hiện nay, Công ty cũng đã và đang thực hiện thi công một số hạng mục PCCC. Đây là một hướng phát triển mới và đang được thị trường đón nhận nhờ phương châm làm việc chuyên nghiệp, tận tâm và luôn đặt chất lượng công trình và sự hài lòng của khách hàng lên hàng đầu.'
    }
  ],
  stats: [
    { value: '1.500+', label: 'Tỷ VNĐ Tổng vốn giám sát', icon: 'Coins' },
    { value: '300+', label: 'Giường bệnh/Dự án y tế', icon: 'Building2' },
    { value: '2019', label: 'Năm thành lập & phát triển', icon: 'Award' },
    { value: '100%', label: 'Đạt chuẩn kỹ thuật & PCCC', icon: 'ShieldCheck' }
  ]
};

export const SERVICES_DATA: Service[] = [
  {
    id: 'tu-van-giam-sat',
    title: 'Tư vấn giám sát',
    code: 'TVGS',
    shortDesc: 'Giám sát thi công xây dựng & lắp đặt thiết bị, đảm bảo chất lượng, đúng thiết kế, an toàn lao động và đúng tiến độ.',
    fullDesc: 'Dịch vụ Tư vấn giám sát của VTS kiểm soát chặt chẽ từng công đoạn thi công từ phần móng, kết cấu, kiến trúc đến cơ điện (MEP) và PCCC. Chúng tôi đại diện cho Chủ đầu tư theo dõi, kiểm tra, nghiệm thu công việc xây dựng theo đúng tiêu chuẩn kỹ thuật hiện hành.',
    iconName: 'Eye',
    benefits: [
      'Đảm bảo 100% chất lượng vật tư, vật liệu và quy chuẩn thi công.',
      'Tối ưu hóa chi phí, ngăn ngừa thất thoát và phát sinh không đáng có.',
      'Kiểm soát nghiêm ngặt tiến độ và an toàn lao động trên công trường.',
      'Đội ngũ kỹ sư giám sát có chứng hành nghề bậc I, II giàu kinh nghiệm.'
    ],
    workflow: [
      'Khảo sát hiện trạng & tiếp nhận hồ sơ thiết kế',
      'Lập kế hoạch và đề khương giám sát chi tiết',
      'Giám sát thường trực tại công trường & nghiệm thu từng giai đoạn',
      'Lập báo cáo định kỳ & hỗ trợ nghiệm thu bàn giao đưa vào sử dụng'
    ],
    featuredProjects: ['Bệnh viện TNH Lạng Sơn', 'Bệnh viện TNH Việt Yên', 'KBNN Cầu Giấy'],
    bgImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'tu-van-thiet-ke',
    title: 'Tư vấn thiết kế',
    code: 'TVTK',
    shortDesc: 'Tư vấn thiết kế kiến trúc, kết cấu, MEP và hạ tầng kỹ thuật tối ưu công năng, thẩm mỹ và tiết kiệm chi phí.',
    fullDesc: 'VTS cung cấp dịch vụ tư vấn thiết kế toàn diện cho các công trình dân dụng, công nghiệp, y tế và thương mại. Với tư duy thiết kế hiện đại, kết hợp hài hòa giữa công năng sử dụng, tính bền vững và quy chuẩn PCCC.',
    iconName: 'Compass',
    benefits: [
      'Giải pháp kiến trúc hiện đại, tối ưu không gian và công năng.',
      'Tính toán kết cấu an toàn, tiết kiệm chi phí nguyên vật liệu.',
      'Tích hợp đồng bộ hệ thống Cơ Điện (MEP) & PCCC ngay từ bước lập dự án.',
      'Hồ sơ thiết kế chuẩn xác, phục vụ cấp phép xây dựng thuận lợi.'
    ],
    workflow: [
      'Khảo sát địa chất, hiện trạng & tiếp nhận yêu cầu chủ đầu tư',
      'Thiết kế cơ sở & phương án kiến trúc tổng thể',
      'Thiết kế bản vẽ thi công & dự toán chi tiết',
      'Thực hiện giám sát tác giả trong quá trình thi công'
    ],
    featuredProjects: ['Nhà sách Phương Nam (Lotte Center)', 'Công trình Y tế & Cơ quan Nhà nước'],
    bgImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'tu-van-tham-tra',
    title: 'Tư vấn thẩm tra',
    code: 'TVTT',
    shortDesc: 'Thẩm tra thiết kế, thẩm tra dự toán xây dựng nhằm phát hiện sai sót, đảm bảo an toàn chịu lực và tính hiệu quả kinh tế.',
    fullDesc: 'Dịch vụ Thẩm tra của VTS giúp Chủ đầu tư đánh giá độc lập tính đúng đắn của giải pháp thiết kế, sự phù hợp với quy chuẩn xây dựng Việt Nam và tính chính xác của khối lượng, đơn giá trong hồ sơ dự toán.',
    iconName: 'FileCheck2',
    benefits: [
      'Phát hiện kịp thời các xung đột kỹ thuật và sai sót trong thiết kế.',
      'Đánh giá chính xác tính an toàn chịu lực và ổn định công trình.',
      'Thẩm tra dự toán, loại bỏ các chi phí tính đúng, tính thừa.',
      'Giúp Chủ đầu tư an tâm trước khi phê duyệt dự án.'
    ],
    workflow: [
      'Nghiên cứu hồ sơ thiết kế & dự toán đầu vào',
      'Rà soát tiêu chuẩn, quy chuẩn và tính toán độc lập',
      'Lập văn bản thông báo kết quả thẩm tra & kiến nghị chỉnh sửa',
      'Phát hành báo cáo thẩm tra chính thức'
    ],
    featuredProjects: ['Dự án Kho bạc Nhà nước Hà Nội', 'Công trình hạ tầng y tế'],
    bgImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'tu-van-dau-thau',
    title: 'Tư vấn đấu thầu',
    code: 'TVDT',
    shortDesc: 'Lập hồ sơ mời thầu, hồ sơ yêu cầu, đánh giá hồ sơ dự thầu đảm bảo minh bạch, công bằng và chọn đúng nhà thầu năng lực.',
    fullDesc: 'Chúng tôi hỗ trợ Chủ đầu tư tổ chức đấu thầu các gói thầu tư vấn, thi công xây lắp và cung cấp thiết bị đúng quy định của Luật Đấu thầu, giúp lựa chọn được nhà thầu chất lượng nhất với giá thành cạnh tranh.',
    iconName: 'Briefcase',
    benefits: [
      'Tuân thủ 100% các quy định pháp luật về đấu thầu hiện hành.',
      'Lập HSMT/HSYC chặt chẽ, tối ưu tiêu chuẩn đánh giá nhà thầu.',
      'Đánh giá HSDT khách quan, minh bạch và chuyên nghiệp.',
      'Tiết kiệm tối đa thời gian và chi phí cho Chủ đầu tư.'
    ],
    workflow: [
      'Lập kế hoạch lựa chọn nhà thầu',
      'Soạn thảo Hồ sơ mời thầu / Hồ sơ yêu cầu',
      'Đánh giá Hồ sơ dự thầu / Hồ sơ đề xuất',
      'Lập Báo cáo đánh giá & hỗ trợ thương thảo hợp đồng'
    ],
    featuredProjects: ['Các gói thầu nâng cấp sửa chữa KBNN Hà Nội', 'Công trình hạ tầng công cộng'],
    bgImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'thi-cong-pccc',
    title: 'Thi công hệ thống PCCC',
    code: 'TCPCCC',
    shortDesc: 'Thi công, lắp đặt và nghiệm thu hệ thống Phòng cháy chữa cháy chuyên nghiệp, an toàn, đạt chuẩn Bộ Công An.',
    fullDesc: 'Là hướng phát triển bứt phá của VTS từ năm 2023 - 2024. Chúng tôi nhận thi công trọn gói hệ thống báo cháy tự động, hệ thống chữa cháy vách tường, Sprinkler, màn nước ngăn cháy, bình chữa cháy và hệ thống hút khói sự cố.',
    iconName: 'Flame',
    benefits: [
      'Thi công chuẩn mực theo QCVN 06:2022/BXD & TCVN PCCC.',
      'Cung cấp vật tư, thiết bị PCCC chính hãng có tem kiểm định.',
      'Tối ưu thời gian thẩm duyệt & nghiệm thu với Cơ quan Cảnh sát PCCC.',
      'Bảo hành, bảo trì định kỳ uy tín, sẵn sàng khắc phục sự cố 24/7.'
    ],
    workflow: [
      'Khảo sát thực địa & thẩm định bản vẽ thẩm duyệt PCCC',
      'Lập phương án thi công & cung ứng thiết bị PCCC kiểm định',
      'Triển khai thi công, lắp đặt & chạy thử liên động hệ thống',
      'Phối hợp thử nghiệm & hỗ trợ cấp giấy nghiệm thu PCCC'
    ],
    featuredProjects: ['Các hạng mục PCCC Bệnh viện & Tòa nhà văn phòng', 'Cơ quan nhà nước & Trung tâm thương mại'],
    bgImage: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80'
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'benh-vien-tnh-lang-son',
    name: 'Dự án Bệnh viện TNH Lạng Sơn',
    category: 'y-te',
    categoryLabel: 'Bệnh viện & Y tế',
    scale: '300 giường bệnh, diện tích 9.278,5 m²',
    area: '9.278,5 m²',
    investment: 'Gần 900 Tỷ VNĐ',
    role: 'Tư vấn giám sát toàn bộ dự án',
    location: 'Thành phố Lạng Sơn, Tỉnh Lạng Sơn',
    year: '2024',
    client: 'Công ty Cổ phần Tập đoàn Bệnh viện TNH',
    description: 'Bệnh viện TNH Lạng Sơn là dự án y tế hiện đại bậc nhất khu vực biên giới phía Bắc. Dự án bao gồm khối nhà chính cao tầng trang bị hệ thống máy móc y tế tân tiến, khu điều trị nội trú 300 giường bệnh cùng hệ thống hạ tầng kỹ thuật, PCCC hoàn chỉnh. VTS là đơn vị Tư vấn giám sát được Chủ đầu tư tin tưởng lựa chọn từ đầu năm 2024.',
    highlights: [
      'Quy mô lớn với diện tích đất 9.278,5 m², tổng vốn đầu tư gần 900 tỷ đồng.',
      'Giám sát nghiêm ngặt hệ thống phòng mổ áp lực dương, khu điều trị tích cực (ICU).',
      'Kiểm soát tiến độ thi công cao độ, bảo đảm an toàn kết cấu và chuẩn PCCC quốc gia.',
      'Công trình có ý nghĩa lớn đối với công tác chăm sóc sức khỏe nhân dân tỉnh Lạng Sơn.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80'
    ],
    isFeatured: true
  },
  {
    id: 'benh-vien-tnh-viet-yen',
    name: 'Dự án Bệnh viện TNH Việt Yên',
    category: 'y-te',
    categoryLabel: 'Bệnh viện & Y tế',
    scale: '15 tầng, 300 giường bệnh, diện tích > 5.000 m²',
    area: '> 5.000 m²',
    investment: '618 Tỷ VNĐ',
    role: 'Tư vấn giám sát (Liên danh với Công ty CP TV&ĐẦU HCT)',
    location: 'Thị xã Việt Yên, Tỉnh Bắc Giang',
    year: '2023 - 2024',
    client: 'Công ty Cổ phần Tập đoàn Bệnh viện TNH',
    description: 'Dự án xây dựng Bệnh viện TNH Việt Yên với quy mô 15 tầng nổi, 300 giường bệnh tiêu chuẩn quốc tế. VTS cùng đối tác liên danh HCT thực hiện công tác Tư vấn giám sát từ năm 2023. Công trình được khánh thành và đưa vào hoạt động năm 2024, tạo mốc phát triển rực rỡ cho VTS.',
    highlights: [
      'Khối nhà 15 tầng hiện đại, diện tích sàn xây dựng lớn.',
      'Giám sát thi công phần móng sâu, kết cấu bê tông cốt thép dự ứng lực.',
      'Giám sát lắp đặt trang thiết bị y tế cao cấp, hệ thống khí y tế trung tâm và PCCC.',
      'Dự án đạt chuẩn chất lượng cao, hoàn thành vượt cam kết về tiến độ.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1200&q=80'
    ],
    isFeatured: true
  },
  {
    id: 'nha-sach-phuong-nam-lotte-center',
    name: 'Nhà sách Phương Nam - Lotte Center Hà Nội',
    category: 'thuong-mai',
    categoryLabel: 'Thương mại & Nội thất',
    scale: 'Không gian văn hóa & bán lẻ cao cấp',
    area: '800 m²',
    investment: 'Dự án thương mại cao cấp',
    role: 'Tư vấn thiết kế & Giám sát thi công',
    location: 'Lotte Center Hà Nội, Số 54 Liễu Giai, Ba Đình, Hà Nội',
    year: '2022',
    client: 'Công ty Cổ phần Văn hóa Phương Nam',
    description: 'Công trình không gian nhà sách cao cấp Phương Nam đặt tại Tòa nhà Lotte Center Hà Nội. VTS thực hiện tư vấn thiết kế và giám sát thi công hoàn thiện nội thất, hệ thống chiếu sáng nghệ thuật và giải pháp an toàn PCCC cho không gian thương mại đông người.',
    highlights: [
      'Kiến trúc nội thất tinh tế, kết hợp khu đọc sách, đồ lưu niệm và cafe sách.',
      'Đảm bảo nghiêm ngặt quy định an toàn PCCC và thi công trong tòa nhà Lotte Center.',
      'Thi công nhanh chóng, đạt giá trị thẩm mỹ cao.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80'
    ],
    isFeatured: true
  },
  {
    id: 'cai-tao-sua-chua-kbnn-ha-noi',
    name: 'Cải tạo sửa chữa các trụ sở Kho bạc Nhà nước thuộc KBNN Hà Nội',
    category: 'co-quan-nha-nuoc',
    categoryLabel: 'Cơ quan nhà nước',
    scale: 'Các trụ sở KBNN Thanh Trì, KBNN Cầu Giấy,...',
    area: 'Nhiều trụ sở làm việc',
    investment: 'Vốn ngân sách nhà nước',
    role: 'Tư vấn giám sát & Thẩm tra',
    location: 'Các quận/huyện thuộc TP. Hà Nội (Thanh Trì, Cầu Giấy,...)',
    year: '2019 - 2023',
    client: 'Kho bạc Nhà nước Hà Nội',
    description: 'Chuỗi dự án cải tạo, nâng cấp và sửa chữa trụ sở làm việc cho Kho bạc Nhà nước Hà Nội bao gồm KBNN Thanh Trì, KBNN Cầu Giấy. VTS tự hào đồng hành cùng KBNN Hà Nội từ những ngày đầu thành lập công ty.',
    highlights: [
      'Tư vấn giám sát đảm bảo an toàn an ninh tuyệt đối cho công trình tài chính.',
      'Cải tạo hệ thống điện, PCCC, chống thấm và nâng cấp không gian làm việc.',
      'Thực hiện đúng quy định quản lý vốn đầu tư công.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=1200&q=80'
    ],
    isFeatured: true
  },
  {
    id: 'uy-ban-giam-sat-tai-chinh-quoc-gia',
    name: 'Cải tạo trụ sở Ủy ban Giám sát Tài chính Quốc gia',
    category: 'co-quan-nha-nuoc',
    categoryLabel: 'Cơ quan nhà nước',
    scale: 'Trụ sở làm việc trung ương',
    area: '2.500 m²',
    investment: 'Vốn ngân sách nhà nước',
    role: 'Tư vấn giám sát cải tạo & sửa chữa',
    location: 'Quận Hoàn Kiếm, TP. Hà Nội',
    year: '2020',
    client: 'Ủy ban Giám sát Tài chính Quốc gia',
    description: 'Dự án cải tạo, sửa chữa trụ sở làm việc cơ quan trung ương Ủy ban Giám sát Tài chính Quốc gia. Công tác tư vấn giám sát được VTS triển khai chuẩn mực, đảm bảo yêu cầu thẩm mỹ và an toàn thông tin.',
    highlights: [
      'Giám sát cải tạo nội thất, hạ tầng mạng, điện nhẹ và PCCC.',
      'Giữ vững chất lượng công trình và tiến độ thi công khắt khe.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'trung-tam-dieu-duong-nguoi-co-cong-ha-noi',
    name: 'Sửa chữa Trung tâm điều dưỡng người có công Hà Nội',
    category: 'co-quan-nha-nuoc',
    categoryLabel: 'Cơ quan nhà nước & Y tế',
    scale: 'Khu điều dưỡng & chăm sóc sức khỏe',
    area: '3.800 m²',
    investment: 'Ngân sách an sinh xã hội',
    role: 'Tư vấn giám sát thi công',
    location: 'TP. Hà Nội',
    year: '2020 - 2021',
    client: 'Sở Lao động - Thương binh và Xã hội Hà Nội',
    description: 'Dự án sửa chữa, nâng cấp toàn diện các hạng mục phòng nghỉ, khu phục hồi chức năng và hạ tầng sân vườn cho Trung tâm điều dưỡng người có công Hà Nội. Công trình mang ý nghĩa tri ân và an sinh xã hội sâu sắc.',
    highlights: [
      'Tạo lập môi trường sinh hoạt an toàn, tiện nghi cho thương bệnh binh và người có công.',
      'Giám sát chặt chẽ tiến độ, thi công không làm ảnh hưởng đến hoạt động điều dưỡng.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'thi-cong-pccc-toa-nha-y-te',
    name: 'Thi công lắp đặt hệ thống PCCC hạng mục y tế & công cộng',
    category: 'pccc',
    categoryLabel: 'Thi công PCCC',
    scale: 'Hệ thống báo cháy tự động & Chữa cháy Sprinkler',
    area: 'Thi công đa điểm',
    investment: 'Hợp đồng trọn gói',
    role: 'Nhà thầu thi công PCCC',
    location: 'Hà Nội và các tỉnh lân cận',
    year: '2023 - 2024',
    client: 'Các Chủ đầu tư công trình & Doanh nghiệp',
    description: 'VTS trực tiếp thi công lắp đặt hệ thống phòng cháy chữa cháy bao gồm cụm máy bơm chữa cháy, đường ống vách tường, đầu phun Sprinkler, tủ điều khiển và hệ thống báo cháy địa chỉ cho các công trình y tế, tòa nhà văn phòng.',
    highlights: [
      'Lắp đặt thiết bị PCCC đạt chuẩn có tem nghiệm thu kiểm định.',
      'Tối ưu hóa khả năng vận hành tự động khi xảy ra sự cố cháy nổ.',
      'Hỗ trợ nghiệm thu nhanh chóng với Phòng Cảnh sát PCCC & CNCH.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80'
    ],
    isFeatured: true
  }
];

export const NEWS_DATA: NewsItem[] = [
  {
    id: 'khai-truong-benh-vien-tnh-lang-son',
    title: 'Khai trương Bệnh viện TNH Lạng Sơn - Dự án do VTS thực hiện Tư vấn giám sát',
    summary: 'Bệnh viện TNH Lạng Sơn với quy mô 300 giường bệnh, tổng vốn gần 900 tỷ đồng chính thức khai trương. VTS tự hào là đơn vị Tư vấn giám sát đồng hành cùng sự thành công của dự án.',
    date: '15/07/2024',
    source: 'Cổng thông tin điện tử Tỉnh Lạng Sơn',
    externalUrl: 'https://langson.gov.vn/tin-moi/khai-truong-benh-vien-tnh-lang-son.html',
    imageUrl: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80',
    category: 'Sự kiện & Báo chí',
    isHot: true,
    content: [
      'Ngày khai trương Bệnh viện TNH Lạng Sơn đánh dấu bước ngoặt lớn trong công tác chăm sóc sức khỏe nhân dân tỉnh Lạng Sơn và khu vực biên giới.',
      'Dự án có quy mô 300 giường bệnh, diện tích 9.278,5 m² với tổng mức đầu tư gần 900 tỷ đồng. Với vai trò đơn vị Tư vấn giám sát, Công ty TNHH Tư vấn và Xây dựng VTS đã cử đội ngũ kỹ sư thường trực tại công trường, kiểm soát khắt khe từ giai đoạn thi công móng, kết cấu, lắp đặt trang thiết bị y tế đến nghiệm thu hệ thống PCCC.',
      'Chủ đầu tư Tập đoàn Bệnh viện TNH đánh giá rất cao năng lực, sự tinh thần trách nhiệm và tính chuyên nghiệp của đội ngũ giám sát VTS.'
    ]
  },
  {
    id: 'khai-truong-benh-vien-tnh-viet-yen',
    title: 'Kỷ niệm 10 năm thành lập Tập đoàn TNH và Khai trương Bệnh viện TNH Việt Yên',
    summary: 'Lễ kỷ niệm 10 năm thành lập Tập đoàn Bệnh viện TNH gắn liền với sự kiện khánh thành Bệnh viện TNH Việt Yên (15 tầng, 618 tỷ đồng) do Liên danh VTS - HCT tư vấn giám sát.',
    date: '28/05/2024',
    source: 'Báo Bắc Ninh TV',
    externalUrl: 'https://baobacninhtv.vn/bg2/viet-yen/ky-niem-10-nam-thanh-lap-cong-ty-co-phan-tap-doan-benh-vien-tnh-va-khai-truong-benh-vien-tnh-viet-yen-postid410007.bbg',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
    category: 'Tin tức dự án',
    isHot: true,
    content: [
      'Tại thị xã Việt Yên, Công ty Cổ phần Tập đoàn Bệnh viện TNH đã trang trọng tổ chức Lễ kỷ niệm 10 năm thành lập và khai trương Bệnh viện TNH Việt Yên.',
      'Dự án có quy mô 15 tầng nổi, 300 giường bệnh với tổng mức đầu tư 618 tỷ đồng. Liên danh Công ty TNHH Tư vấn và Xây dựng VTS và Công ty CP TV&ĐẦU HCT đã hoàn thành xuất sắc công tác tư vấn giám sát, đảm bảo công trình đạt chuẩn chất lượng cao nhất.',
      'Sự kiện có sự tham dự của lãnh đạo các cơ quan trung ương, Tỉnh ủy, HĐND, UBND tỉnh Bắc Giang cùng đông đảo cán bộ, y bác sĩ.'
    ]
  },
  {
    id: 'vts-mo-rong-linh-vuc-thi-cong-pccc',
    title: 'VTS đẩy mạnh năng lực thi công hệ thống PCCC chuẩn quy chuẩn QCVN 06:2022',
    summary: 'Đáp ứng nhu cầu khắt khe về an toàn PCCC cho các công trình hiện đại, VTS đầu tư bài bản cho mảng thi công PCCC chuyên nghiệp.',
    date: '10/03/2024',
    source: 'Tin tức VTS Construction',
    imageUrl: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80',
    category: 'Hoạt động công ty',
    content: [
      'Song song với thế mạnh tư vấn giám sát các dự án y tế và cơ quan nhà nước, Công ty VTS chính thức mở rộng hạ tầng đội ngũ kỹ sư và công nhân kỹ thuật thi công PCCC.',
      'VTS áp dụng quy trình kiểm soát vật tư chính hãng, thử áp lực đường ống khép kín và nghiệm thu liên động hệ thống báo cháy - chữa cháy tự động. Hướng đi mới này nhận được sự đón nhận và ủng hộ lớn từ đối tác.'
    ]
  },
  {
    id: 'quy-trinh-tu-van-giam-sat-y-te',
    title: 'Tiêu chuẩn kỹ thuật trong công tác giám sát xây dựng các công trình Y tế cao tầng',
    summary: 'Chia sẻ từ chuyên gia VTS về kiểm soát áp lực phòng mổ, hệ thống khí y tế trung tâm và giải pháp PCCC trong môi trường bệnh viện.',
    date: '18/01/2024',
    source: 'Chuyên san Kỹ thuật Xây dựng VTS',
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80',
    category: 'Góc chuyên môn',
    content: [
      'Giám sát thi công bệnh viện đòi hỏi kiến thức chuyên sâu vượt trội so với công trình dân dụng thông thường. Yêu cầu khắt khe về xử lý chống nhiễm khuẩn, phòng mổ vô trùng áp lực dương, cách âm, hạ tầng điện lưới cấp 1 không đứt đoạn.',
      'VTS luôn áp dụng sổ tay giám sát chuyên biệt cho khối công trình y tế, giúp phát hiện sớm các nguy cơ sai sót thiết kế và tối ưu chi phí cho Chủ đầu tư.'
    ]
  }
];

export const MILESTONES: Milestone[] = [
  {
    year: '2019',
    title: 'Thành lập công ty VTS',
    description: 'Thành lập với 2 nhân sự nòng cốt. Khởi đầu với hợp đồng Tư vấn giám sát cải tạo Kho bạc Nhà nước Hà Nội, Ủy ban Giám sát Tài chính Quốc gia và Trung tâm điều dưỡng người có công Hà Nội.',
    badge: 'Khởi đầu',
    highlightProjects: ['KBNN Hà Nội', 'UB Giám sát Tài chính Quốc gia']
  },
  {
    year: '2021 - 2022',
    title: 'Vượt qua thách thức COVID-19',
    description: 'Nỗ lực học hỏi, nâng cao trình độ chuyên môn kỹ sư, tích lũy hồ sơ năng lực và chuẩn bị tiền đề kỹ thuật vững chắc.',
    badge: 'Kiên trì & Tích lũy'
  },
  {
    year: '2023',
    title: 'Bứt phá với Bệnh viện TNH Việt Yên',
    description: 'Liên danh với Công ty CP TV&ĐẦU HCT ký kết hợp đồng TVGS Bệnh viện TNH Việt Yên (15 tầng, 300 giường, 618 tỷ VNĐ). Mở rộng mảng Thi công PCCC.',
    badge: 'Dự án trọng điểm 618 tỷ',
    highlightProjects: ['Bệnh viện TNH Việt Yên']
  },
  {
    year: '2024 - Nay',
    title: 'Khẳng định vị thế & Phát triển Thi công PCCC',
    description: 'Trúng thầu gói TVGS Bệnh viện TNH Lạng Sơn (300 giường, ~900 tỷ VNĐ). Đẩy mạnh thi công PCCC trọn gói cho công trình y tế & công cộng.',
    badge: 'Dự án quy mô 900 tỷ',
    highlightProjects: ['Bệnh viện TNH Lạng Sơn', 'Thi công PCCC']
  }
];
