const letters = [
  {
    id: "klee",
    authorName: "Klee",
    polaroidAvt: "assets/avts/kleeavt.jpg", 
    fallingSticker: "assets/stickers/klee.png", 
    voice: "assets/bgm/VO_JA_Klee_Birthday).mp3",
    cardTitle: "Thư từ Klee",
    title: "Bùm Bùm Chúc Mừng Sinh Nhật!",
    body: 
      "Gửi chị Sweet yêu quý của Klee,\n\n" +
      "Hôm nay Klee dậy từ lúc mặt trời còn chưa lên cao để lén chạy ra bờ hồ Tinh Thể tìm báu vật đấy! Đội trưởng Jean vừa nhắc Klee là hôm nay, ngày 30 tháng 8, chính là sinh nhật của chị Sweet. Klee chạy ngay về phòng để viết bức thư này gửi chị nè!\n\n" +
      "Chúc mừng sinh nhật chị Sweet, bùm bùm bùm!\n\n" +
      "Klee cảm ơn chị Sweet nhiều ơi là nhiều vì lúc nào chị cũng thương Klee, dẫn Klee đi thám hiểm khắp mọi nơi và cho Klee vị trí xịn nhất trong đội hình. Mỗi lần đi chơi cùng chị, chị luôn che chở và nhường cho Klee bao nhiêu là món ngon, lại còn không bao giờ mắng khi Klee lỡ tay nổ tung bãi cỏ nữa. Chị Sweet lúc nào cũng dịu dàng, chu đáo chăm sóc Klee như một người chị cả tuyệt vời nhất trên đời!\n\n" +
      "Klee đã cẩn thận giấu một món quà siêu đặc biệt trong chiếc hộp này: một chiếc lông vũ sáng lấp lánh của chim bồ câu rừng, một viên đá hoa tiêu hình cỏ bốn lá may mắn, và một bé búp bê Dodoco nhỏ xíu do chính tay Klee thêu để bảo vệ chị mỗi ngày (Klee hứa là chiếc hộp này hoàn toàn không có thuốc nổ đâu, anh Albedo đã kiểm tra giúp Klee rồi đó!).\n\n" +
      "Sang tuổi mới, Klee chúc chị Sweet lúc nào cũng vui vẻ, hạnh phúc và gặp thật nhiều may mắn! Khi nào chị rảnh, chị em mình lại cùng nhau trốn đi nướng cá và ngắm pháo hoa rực rỡ nhé!\n\n" +
      "Dodoco cũng gửi lời chúc mừng sinh nhật đến chị Sweet!\n\n" +
      "Klee",
    theme: { bg: "url('assets/bg/kleebg.jpg')", paper: "#fff7ed", text: "#7c2d12", particleColor: "#f59e0b" }
  },
  {
    id: "tighnari",
    authorName: "Tighnari",
    polaroidAvt: "assets/avts/tighavt.jpg",
    fallingSticker: "assets/stickers/tighanri.png", 
    voice: "assets/bgm/VO_JA_Tighnari_Birthday.mp3",
    cardTitle: "Thư từ Tighnari",
    title: "Từ Rừng Già Avidya",
    body: 
      "Gửi Sweet,\n\n" +
      "Sáng sớm hôm nay ở rừng Avidya, những giọt sương đọng trên phiến lá nguyệt quế dường như trong trẻo hơn thường lệ, và những đóa Nilotpala bên dòng suối cũng bung nở rực rỡ một cách kỳ lạ. Tôi đã ghi chép cẩn thận vào sổ tay kiểm lâm, trước khi nhận ra lý do thực sự: hôm nay là ngày 30 tháng 8, ngày sinh nhật của em.\n\n" +
      "Chúc mừng sinh nhật, Sweet.\n\n" +
      "Tôi thường nhắc nhở các học giả và kiểm lâm viên rằng sự quan sát tỉ mỉ là chìa khóa để hiểu được rừng già. Nhưng thành thật mà nói, chính sự chu đáo và ân cần mà em luôn dành cho tôi lại khiến một người quen lý tính như tôi phải bất ngờ. Cảm ơn em vì đã luôn kiên nhẫn đồng hành, lắng nghe những bài giảng dài dòng về thực vật học mà không hề than phiền, và hơn hết là đã dành cho tôi một vị trí vô cùng đặc biệt bên cạnh em.\n\n" +
      "Từng chuyến hành trình, từng trận chiến hay chỉ đơn giản là những khoảnh khắc dừng chân nghỉ ngơi, tôi đều cảm nhận rất rõ sự chăm chút cẩn thận mà em gửi gắm. Em biết tai tôi nhạy cảm với tiếng ồn nên luôn chọn những góc yên tĩnh nhất; em nhớ cả thói quen thưởng trà lẫn những nguyên liệu nghiên cứu tôi cần. Được em trân trọng và đặt vào một vị trí quan trọng như vậy, đối với tôi, là điều quý giá hơn bất kỳ luận văn học thuật nào từng được công nhận tại Giáo Viện.\n\n" +
      "Tôi đã ép khô một cành hoa đặc biệt hái từ vách đá cao nhất của thung lũng Ardravi, ướp cùng hương cỏ thơm để làm thành thẻ đánh dấu sách cho em, kèm theo một túi trà thảo mộc tự tay tôi phối trộn giúp an thần và ngủ ngon. Đừng thức khuya quá nhiều, và nếu đi đường có gặp mưa rào thì nhớ tìm chỗ trú ngay, đừng để bị cảm lạnh đấy.\n\n" +
      "Bước sang tuổi mới, tôi mong em luôn giữ được nụ cười rạng rỡ, bình an trong tâm hồn và gặt hái được mọi điều em mong muốn. Bất kể chặng đường phía trước dài bao nhiêu, chỉ cần em quay đầu lại, tôi vẫn sẽ luôn ở đây, sẵn sàng cùng em lắng nghe thanh âm dịu dàng của rừng xanh.\n\n" +
      "Sinh nhật vui vẻ nhé, Sweet.\n\n" +
      "Tighnari",
    theme: { bg: "url('assets/bg/tighnaribg.jpg')", paper: "#fbf8ee", text: "#1c3823", particleColor: "#84cc16" }
  },
  {
    id: "aynce", 
    authorName: "Aynce", 
    polaroidAvt: "assets/avts/furinaavt.jpg", 
    fallingSticker: "assets/stickers/furina.png", 
    voice: "assets/bgm/VO_JA_Furina_Birthday.mp3",
    cardTitle: "Thư từ Aynce", 
    title: "𓅰 𓅬 𓅭 𓅮 𓅯",
    body: 
      "Cuối cùng ngày này cũng đến, sinh nhựt đầu tiên của bạn kể từ khi chúng ta gặp nhau phải hong taa\n\n" +
      "Đầu tiên thì gửi lời chúc mừng sinh nhật đến Sweet nha !!!\n\n" +
      "Giờ ngồi nghĩ lại cũng thấy khá hay vì lần đầu tiên chúng ta gặp nhau lại là qua game, mà ban đầu tôi với bạn còn chẳng biết nhau là ai, chỉ vì cùng quen Lucas nên sau đó mới có dịp chơi chung =))))) Từ vài lần chơi game cùng nhau, nói chuyện linh tinh trên game rồi trên gúp, chẳng biết từ lúc nào lại thành quen và thân thiết hơn. Tôi vẫn nhớ mãi cái vụ vào ấm trần ca chơi chung rồi đi mò cái cây cười vl =)))))))\n\n" +
      "Ấn tượng đầu tiên của tôi về Sweet là một người rất năng nổ, dễ thương và lúc nào cũng có cảm giác tràn đầy năng lượng, đúng kiểu sunshine trừ mấy lúc nồm (ganyu đánh giá). Đi chơi game hay nói chuyện chung lúc nào cũng thấy Sweet góp mặt, mâm nào cũng có phần, kiểu rất dễ khiến người khác cảm thấy năng lượng và vui vẻ khi ở cùng.\n\n" +
      "Nhưng điều tôi thấy hay nhất chắc là cái vibe “chị lớn” của bạn =)))) Có những lúc đang nói chuyện bình thường, xong nếu có ai trong số 3 đứa kêu mệt, đau này kia là bạn tự nhiên chuyển sang mode chăm sóc sức khỏe cho cả 3 con, chia sẻ mấy cái tip này này kia kia, rồi nhắc đủ thứ như thể bảo mẫu. Nhìn cười vl, nhưng tôi nghĩ đó cũng là một trong những điều khiến Sweet trở nên đáng quý. Không phải ai cũng đủ trải nghiệm để để ý và quan tâm đến những chuyện nhỏ như vậy đâu (lấp lánh).\n\n" +
      "Cảm thấy khá là vui vì ngày đó Lucas đã vô tình trở thành “cầu nối” giữa 2 đứa nhỉ. Nếu không có mấy lần Lucas kéo tôi vào chơi chung hồi trước thì chắc tôi cũng chẳng có cơ hội biết một người như bạn, tại 1 người nam 1 người bắc, game thì vô số player, lướt qua nhau là chuyện bình thường luôn á.\n\n" +
      "Năm nay là sinh nhật đầu tiên bạn đón cùng anh em, tôi chúc Sweet luôn vui vẻ, gặp thật nhiều chuyện tốt, làm được những điều mình muốn và quan trọng nhất là nhớ chăm sóc bản thân nữa nhé. Mong rằng chúng ta sẽ còn chơi game, nói chuyện và có thêm thật nhiều kỷ niệm vui với nhau trong thời gian tới. Đặc biệt là khi bạn sắp ra HN (xoa tay 100).\n\n" +
      "Cuối cùng thì 1 lần nữa, chúc mừng sinh nhật Sweet nhóo! 💗Chúc bạn sống lâu trăm tuổi, bách thọ giai lão để còn mấy cái kèo tuổi xế chiều cùng anh em nữa nhaaa",
    theme: { bg: "url('assets/bg/furinabg.jpg')", paper: "#f0f7ff", text: "#0f3a61", particleColor: "#93c5fd" }
  },
  {
    id: "yae", authorName: "Yae Satella", polaroidAvt: "assets/avts/yaemikoavt.jpg", fallingSticker: "assets/stickers/yaemiko.png", voice: "assets/bgm/VO_JA_Yae_Miko_Birth_Date.mp3",
    cardTitle: "Thư từ Yae", title: "Từ người cục mịch nhất nhóm",
   body: 
      "Chúc mừng sinh nhật Sweet ✨\n\n" +
      "Không ngờ từ mấy người tình cờ gặp nhau trong Genshin, ban đầu chỉ cùng nhau đánh Ảo Cảnh, vậy mà sau đó lại có thể chơi với nhau lâu đến thế. Từ lúc chỉ vào game đánh vài trận, rồi dần dần nói chuyện nhiều hơn, cùng nhau deeptalk, quay trend, làm đủ thứ chuyện linh tinh, chẳng biết từ lúc nào Lucas, Yae, Anyce với Sweet lại thành một nhóm như bây giờ nữa :))\n\n" +
      "Tôi nghĩ điều khá đặc biệt là dù Sweet ở Lâm Đồng, còn 3 đứa còn lại ở Hà Nội, nhưng khoảng cách địa lý cũng không làm chúng ta xa nhau đến thế. Vẫn có thể cùng vào game, cùng nói chuyện, có những hôm đang chơi bình thường mà chẳng hiểu sao lại chuyển sang deeptalk lúc nào không biết =)) Có những chuyện tưởng chỉ nói một chút thôi mà cuối cùng lại ngồi nói với nhau khá lâu.\n\n" +
      "Rồi cả những lần cùng nhau quay trend nữa. Có những cái lúc nghĩ ra thì thấy cũng bình thường, nhưng đến lúc làm cùng nhau lại thành vui. Tôi khá thích những lúc cả 4 đứa cùng làm một chuyện gì đó, dù đôi khi chẳng đâu vào đâu nhưng ít nhất là chúng ta đã có thêm một kỷ niệm chung.\n\n" +
      "Mới đây thôi Anyce với Lucaca còn cùng nhau “trộm chó” trước cửa nhà tôi nữa chứ =)) Tiếc là giờ chắc khó mà bày lại được trò đấy để tổ chức sinh nhật nữa. Nhưng mà thôi, ít nhất thì chuyện đó cũng đủ để sau này nhắc lại vẫn có cái để cười.\n\n" +
      "Tôi cũng cảm thấy khá may mắn vì từ một nhóm người quen nhau qua game mà chúng ta lại có thể giữ liên lạc và chơi với nhau lâu như vậy. Không phải lúc nào cũng nói chuyện, cũng không phải lúc nào cũng có thời gian chơi cùng nhau, nhưng mỗi lần cả 4 đứa xuất hiện vẫn có cảm giác khá quen thuộc.\n\n" +
      "Sinh nhật năm nay, tôi không biết chúc Sweet điều gì quá to tát. Chỉ mong bạn luôn khỏe mạnh, bình an, bớt phải suy nghĩ những chuyện khiến bản thân mệt mỏi. Những điều bạn đang cố gắng sẽ dần có kết quả, những dự định bạn muốn làm cũng sẽ từng bước thành hiện thực.\n\n" +
      "Mọi người sẽ luôn bên bạn khi cần. Dù 3 đứa ở Hà Nội còn bạn ở Lâm Đồng, nhưng ít nhất chúng ta vẫn có thể gặp nhau trong game, vẫn có thể ngồi deeptalk với nhau, kể cho nhau nghe những chuyện vui buồn hoặc đơn giản là vào game rồi làm mấy trò chẳng đâu vào đâu :))\n\n" +
      "Tôi cũng mong 4 đứa mình sẽ còn chơi với nhau thật lâu. Sau này mỗi người chắc chắn sẽ có những việc riêng, có thể sẽ không còn rảnh như bây giờ, nhưng hy vọng nhóm mình vẫn sẽ ở đó. Biết đâu một ngày nào đó cả 4 đứa thật sự có thể gặp nhau ngoài đời thì sao, lúc đó chắc lại có thêm một đống chuyện để kể :)) (Hẹn gặp Sweet ở thủ đô)\n\n" +
      "Chúc Sweet tuổi mới thật nhiều niềm vui, thật nhiều may mắn và có thêm nhiều điều tốt đẹp đến với bạn. Chúc những điều bạn mong muốn sẽ dần thành hiện thực, những ngày vui sẽ nhiều hơn những ngày mệt mỏi.\n\n" +
      "Và quan trọng nhất là chúc cho Lucas, Yae, Anyce và Sweet vẫn còn chơi với nhau thật lâu thật lâu nữa.\n\n" +
      "Chúc mừng sinh nhật Sweet✨ ",
    theme: { bg: "url('assets/bg/yaemikobg.jpg')", paper: "#fdf2f8", text: "#701a75", particleColor: "#f9a8d4" }
  },
 {
    id: "lucas", 
    authorName: "Lucasta", 
    polaroidAvt: "assets/avts/alyoshaavt.jpg", 
    fallingSticker: "assets/stickers/alyosha.webp", 
    voice: "assets/bgm/VO_JA_Alyosha_Birthday.mp3",
    cardTitle: "Thư từ Lucasta", 
    title: "Gửi em ghệ mọng nước của tôi",
    body: 
      "Chào Sweet,\n\n" +
      "Chúc mừng sinh nhật bạn! Chúc bạn bước sang tuổi mới với thật nhiều niềm vui và những điều rực rỡ nhất.\n\n" +
      "Thời gian trôi qua nhanh thật, ngoảnh đi ngoảnh lại mà cả bọn cũng sắp quen nhau được trọn một năm rồi. Nhớ lại ngày đó, tôi vẫn không thể ngờ được rằng chỉ từ một lần tình cờ đi co-op chung, những con người xa lạ lại bén duyên để rồi giờ đây cả bốn đứa tụ họp lại, cùng nhau đi được đến tận bây giờ. Đúng là một ngã rẽ volo thật =)))\n\n" +
      "Trong mắt tôi, Sweet là một người vô cùng đặc biệt. Bạn mang một nét rất dễ thương (giọng nói của bạn), và lại là một người khá nhạy cảm – tôi đang khen. Ở Sweet, tôi thấy được sự giao thoa giữa hai mảng màu: có những lúc bạn vô tư, hồn nhiên, nhưng đôi khi lại phảng phất chút u sầu, trầm mặc. Nhưng chẳng sao cả =)) tôi thấy như vậy rất ổn, và tôi rất thích (khà khà khà).\n\n" +
      "Trong cái nhóm bốn người này, không thể thiếu bạn được vì bạn nghiễm nhiên trở thành một mảnh ghép không thể nào vắng mặt. Bạn giống như một sợi dây vô hình kéo anh em lại gần nhau hơn, bởi vì như bạn thấy đấy, nếu không có bạn thì cũng chẳng có nhóm mình của ngày hôm nay. Giữa một Yae luôn trầm tính, một đứa lười như tôi, và một Aynce cứ hay thoắt ẩn thoắt hiện, thì chính sự hoạt ngôn của bạn đã giữ cho nhóm luôn tràn đầy \"sức sống\". Những lúc mọi người im ắng không ai nhắn gì, thì vẫn luôn có bạn ở đó khuấy động bầu không khí. Bạn thực sự là người đã giúp cái nhóm này gắn kết lại với nhau hơn =)) (respect)\n\n" +
      "Dù sao thì, sinh nhật rộn ràng, tuổi mới với muôn ngàn điều mới mẻ đang đón chờ. Lucas thực tâm chúc Sweet sẽ dũng cảm làm được nhiều điều mình hằng mong muốn. Mong bạn sẽ trút bỏ được những vướng bận trong lòng, không còn phải mỏi mệt vì những tương tư cảm xúc, hay những khúc mắc từ gia đình và các mối quan hệ xung quanh nữa. Mình sống vì mình, bởi vì Sweet mãi luôn là Sweet.\n\n" +
      "Sau này, nếu có bão giông hay có chuyện gì, cứ gác lại tất cả, ngồi xuống đây và húp một ngụm trà. Bọn tôi sẽ luôn luôn ở đây và lắng nghe bạn.\n\n" +
      "Trai đẹp nhất nhóm - Lucasta",
    theme: { bg: "url('assets/bg/alyoshabg.jpg')", paper: "#ecfdf5", text: "#064e3b", particleColor: "#6ee7b7" }
  },
  {
    id: "kyann",
    authorName: "Kyann",
    polaroidAvt: "assets/avts/columavt.jpg",
    fallingSticker: "assets/stickers/columbina.webp",
    voice: "assets/bgm/VO_JA_Columbina_Birthday.mp3",
    cardTitle: "Thư từ Kyann",
    title: "𓇼 ⋆.˚ 𓆉 𓆝 𓆡⋆.˚ 𓇼",
    body: 
      "Chúc mừng sinh nhật chị Sweet của kyan, mong Sweet có một ngày sinh nhật đáng nhớ nhất, tuổi mới mạnh khoẻ gặp nhiều may mắn.\n\n" +
      "Ngày càng xinhk, đạt được những điều mình muốn, tinh thần thoải mái hơn nữa ne.",
    theme: { bg: "url('assets/bg/columbinabg.jpg')", paper: "#f0fdfa", text: "#155e75", particleColor: "#a5f3fc" }
  }
];

/* ================= DANH SÁCH KỶ NIỆM (ĐÃ THÊM YOUTUBE VÀ ẢNH MỚI) ================= */
const scrapbookData = [
  { type: "video", src: "assets/kyniem/s1.mp4", sticker: "assets/stickers/1.png" },
  { type: "image", src: "assets/kyniem/s2.jpg", sticker: "assets/stickers/2.png" },
  { type: "video", src: "assets/kyniem/s3.mp4", sticker: "assets/stickers/3.webp" },
  { type: "image", src: "assets/kyniem/s4.png", sticker: "assets/stickers/4.png" },
  
  // VIDEO YOUTUBE S5
  { type: "youtube", src: "NnQQE7jg3F8", sticker: "assets/stickers/5.png" },
  
  { type: "image", src: "assets/kyniem/s6.JPG", sticker: "assets/stickers/6.webp" },
  
  // VIDEO YOUTUBE S7
  { type: "youtube", src: "Ij5Ugomwu1o", sticker: "assets/stickers/7.avif" },
  
  { type: "image", src: "assets/kyniem/s8.png", sticker: "assets/stickers/8.png" },
  { type: "video", src: "assets/kyniem/s9.mp4", sticker: "assets/stickers/9.png" },
  { type: "image", src: "assets/kyniem/s10.jpeg", sticker: "assets/stickers/10.webp" },
  { type: "video", src: "assets/kyniem/s11.mov", sticker: "assets/stickers/11.png" }, 
  { type: "video", src: "assets/kyniem/s12.mp4", sticker: "assets/stickers/12.png" },

  // --- THÊM 11 ẢNH KỶ NIỆM MỚI VÀ GẮN STICKER ---
  { type: "image", src: "assets/kyniem/s13.jpe", sticker: "assets/stickers/13.png" },
  { type: "image", src: "assets/kyniem/s14.jpe", sticker: "assets/stickers/14.png" },
  { type: "image", src: "assets/kyniem/s15.jpe", sticker: "assets/stickers/15.png" },
  { type: "image", src: "assets/kyniem/s16.jpe", sticker: "assets/stickers/16.webp" },
  { type: "image", src: "assets/kyniem/s17.jpe", sticker: "assets/stickers/17.png" },
  { type: "image", src: "assets/kyniem/s18.jpe", sticker: "assets/stickers/18.png" },
  { type: "image", src: "assets/kyniem/s19.jpe", sticker: "assets/stickers/19.webp" },
  { type: "image", src: "assets/kyniem/s20.jpe", sticker: "assets/stickers/20.png" },
  { type: "image", src: "assets/kyniem/s21.jpg", sticker: "assets/stickers/21.png" },
  { type: "image", src: "assets/kyniem/s22.jpg", sticker: "assets/stickers/22.png" },
  { type: "image", src: "assets/kyniem/s23.jpg", sticker: "assets/stickers/23.png" }
];

  /* ================== THÔNG SỐ KHỚP LỜI BÀI HÁT "THỨC GIẤC" (ĐẨY NHANH HƠN 0.5S) ================== */
const lyricsData = [
  { time: 0, text: "♪ (Nhạc dạo...) ♪" },
  { time: 13.5, text: "Sau những con đường quen, ta đã vô tình đến" },
  { time: 19, text: "Là nụ cười em quẩn quanh với giấc mơ" },
  { time: 22.5, text: "Nơi những ánh đèn sáng, ta với khung hình khác" },
  { time: 27.5, text: "Là bình yên cất giấu trước cuộc đời" },
  { time: 31.5, text: "Nhìn xem lần sau cuối, là bao điều tiếc nuối" },
  { time: 35.5, text: "Tình yêu là thứ khiến em quên đi vài lần yếu đuối" },
  { time: 40.5, text: "Lặng nhìn giọt sương rơi lạc trong màu u tối" },
  { time: 44.5, text: "Là khi tình yêu ấy đã khiến em thôi những mộng mơ" },
  { time: 49, text: "Anh vẫn thức giấc trên giường với giấc mơ vừa tàn" },
  { time: 53.5, text: "Bản nhạc vụt tắt, bộ phim kia dừng lại" },
  { time: 58, text: "Nghe tiếng mưa rơi bên thềm, anh ngước mắt lặng nhìn" },
  { time: 63.5, text: "Rồi chờ đợi mãi... vẫn không quay lại" },
  { time: 66.5, text: "No no no No no no No no no... Baby, let me know" },
  { time: 75.5, text: "No no no No no no No no no... Baby, let me know" },
  { time: 85, text: "Điều gì xảy ra khi chia đôi cơn mơ?" },
  { time: 87.5, text: "Một thực tại kia không có em đợi chờ" },
  { time: 89.5, text: "Nhìn từng hạt mưa rơi bên hiên vỡ tan" },
  { time: 91.5, text: "Từng ký ức lỡ mang, sao nỡ quên vội vàng" },
  { time: 94, text: "Ở bên anh thêm một đêm thôi một đêm thôi" },
  { time: 97.5, text: "Anh đã từng định nói nhưng rồi lại lặng im thôi" },
  { time: 99.5, text: "Vì anh biết không thể trói buộc, phía trước là bầu trời cao sâu" },
  { time: 102, text: "Sống với những mơ ước thì chẳng được bao lâu" },
  { time: 104, text: "Và tất cả đã hết sẽ chẳng có hồi kết, không có câu tạm biệt..." },
  { time: 108, text: "Anh vẫn thức giấc trên giường với giấc mơ vừa tàn" },
  { time: 113, text: "Bản nhạc vụt tắt, bộ phim kia dừng lại" },
  { time: 117.5, text: "Nghe tiếng mưa rơi bên thềm, anh ngước mắt lặng nhìn" },
  { time: 123, text: "Rồi chờ đợi mãi... vẫn không quay lại" },
  { time: 125, text: "No no no No no no... Baby, let me know" },
  { time: 134, text: "No no no No no no... Baby, let me know" },
  { time: 142.5, text: "Lênh đênh trên ranh giới giữa thực tại" },
  { time: 146.5, text: "Giật mình tỉnh giấc trống không cô đơn" },
  { time: 148.5, text: "Hay mơ tiếp những giấc mơ chẳng thành?" },
  { time: 150.5, text: "Nhặt nhạnh từng chút hơi ấm em còn đâu đây" },
  { time: 153.5, text: "Lại là một ngày mới anh thức giấc với thở dài" },
  { time: 155.5, text: "Lại là một ngày mới đánh thức anh bằng nỗi đau" },
  { time: 158, text: "Dù biết không có phép màu níu em quay trở lại" },
  { time: 160.5, text: "Chỉ một lần sau cuối cho anh được thấy hình bóng em" },
  { time: 164.5, text: "Yeah yeah ah... Làm sao anh biết mình đang mơ hay thực tại?" },
  { time: 168, text: "It feels so real... Anh quay con quay mong con quay không dừng lại" },
  { time: 172, text: "Nếu em hiện ra, liệu anh có ngần ngại, chìm đắm trên đôi vai?" },
  { time: 175.5, text: "Hay là vùng dậy để tỉnh giấc không bên ai, nghe nỗi đau thêm dài?" },
  { time: 179.5, text: "Càng muốn quên, càng nhớ kỹ ghi lâu. Trong giấc mơ, liệu ta có bên nhau?" },
  { time: 183.5, text: "Khi anh thấy ở trong vòng tay anh chẳng hề có em..." },
  { time: 188, text: "Ah một mai thức giấc ah... Hay sẽ mãi mơ ah?" },
  { time: 190.5, text: "Đoạn phim lặp đi lặp lại trong đầu, anh không biết làm sao để thoát ra mau" },
  { time: 194.5, text: "Anh vẫn thức giấc trên giường với giấc mơ vừa tàn" },
  { time: 199.5, text: "Bản nhạc vụt tắt, bộ phim kia dừng lại" },
  { time: 204, text: "Nghe tiếng mưa rơi bên thềm, anh ngước mắt lặng nhìn" },
  { time: 209.5, text: "Rồi chờ đợi mãi... vẫn không quay lại" },
  { time: 212.5, text: "Anh vẫn thức giấc trên giường với giấc mơ vừa tàn" },
  { time: 217.5, text: "Bản nhạc vụt tắt, bộ phim kia dừng lại" },
  { time: 222, text: "Nghe tiếng mưa rơi bên thềm, anh ngước mắt lặng nhìn" },
  { time: 227.5, text: "Rồi chờ đợi mãi... vẫn không quay lại" },
  { time: 231.5, text: "No no no No no no... Baby, let me know (Let me know, ooh)" },
  { time: 239, text: "No no no No no no... Baby, let me know (Please, let me know)" },
  { time: 246.5, text: "Nhìn xem lần sau cuối, là bao điều tiếc nuối" },
  { time: 253, text: "Tình yêu là thứ khiến em quên đi vài lần yếu đuối" },
  { time: 255.5, text: "Lặng nhìn giọt sương rơi lạc trong màu u tối" },
  { time: 260, text: "Là khi tình yêu ấy đã khiến em thôi những mộng mơ... Ooh, ooh" },
  { time: 265.5, text: "♪ (Kết thúc) ♪" },
  { time: 999, text: "" }
];

const guideSteps = [
  { char: "klee", name: "Bé Klee 🍀", text: "Chào chị Sweet! Klee với anh Tighnari đã dán những bức thư này ở đây nè! Chị mở bức thư đang sáng nha!" },
  { char: "tighnari", name: "Tighnari 🌿", text: "Bức thư của Klee lúc nào cũng ồn ào nhỉ. Bức tiếp theo là của tôi, em thử xem nhé." },
  { char: "klee", name: "Bé Klee 🍀", text: "Đọc xong thư anh Tighnari rồi, chị xem tiếp thư của chị Aynce biển xanh nha!" },
  { char: "tighnari", name: "Tighnari 🌿", text: "Tiếp theo là thư từ Đền Narukami. Chắc hẳn Yae Satella có nhiều điều muốn gửi gắm đến em." },
  { char: "klee", name: "Bé Klee 🍀", text: "Woa, lá thư xanh mát của anh Lucas nè! Cố lên, túi đồ sắp đầy rồi!" },
  { char: "tighnari", name: "Tighnari 🌿", text: "Bức cuối cùng là của Kyann. Em hãy nhận lấy mảnh ghép kỷ niệm cuối cùng này đi." },
  { char: "klee", name: "Bé Klee 🍀", text: "Xong rồi!! Klee có một cuốn sổ bí mật ở cuối con đường, chị chạm vào nút bên dưới để mở nha! ✨" }
];

const DEFAULT_MENU_BG = "url('assets/bg/tighnarimenu.jpg')";
const finaleMessage = 
  "Khu rừng này, những bức thư này, và cả cuốn sổ tay kỷ niệm này đều dành riêng cho bạn...\n\n" +
  "Mong rằng tuổi mới của Sweet sẽ luôn rực rỡ và ngập tràn tiếng cười. Cảm ơn vì đã là một mảnh ghép tuyệt vời của bọn tôi. \n\n" +
  "Happy Birthday, Sweet! 💚";