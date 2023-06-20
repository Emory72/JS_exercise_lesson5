function calculator() {
  let benchmark = +document.getElementById("benchmark").value;
  let score1 = +document.getElementById("score1").value;
  let score2 = +document.getElementById("score2").value;
  let score3 = +document.getElementById("score3").value;

  let area = document.getElementById("area").value;
  let person = document.getElementById("person").value;
  //thuộc tính checked để xem radio nào được chọn
  console.log("Khu vực:", area);
  console.log("Đối tượng:", person);
  // Kiểm tra xem khu vực và đối tượng có thuộc danh sách không
  let areaScore = 0;
  let personScore = 0;
  let totalScore = 0;

  if (area === "A" || area === "B" || area === "C") {
    // Gán điểm khu vực tương ứng
    if (area === "A") {
      areaScore = 2;
    } else if (area === "B") {
      areaScore = 1;
    } else {
      areaScore = 0.5;
    }
  }

  if (person === "1" || person === "2" || person === "3") {
    // Gán điểm đối tượng tương ứng
    if (person === "1") {
      personScore = 2;
    } else if (person === "2") {
      personScore = 1;
    } else {
      personScore = 0.5;
    }
  }

  // Kiểm tra điểm môn học và điểm chuẩn
  if (score1 === 0 || score2 === 0 || score3 === 0) {
    // Nếu có một trong ba môn bị điểm 0, cho rớt
    display("Fail", 0);
  } else {
    // Tính tổng điểm
    totalScore = score1 + score2 + score3 + areaScore + personScore;

    // Kiểm tra tổng điểm có lớn hơn hoặc bằng điểm chuẩn không
    if (totalScore > benchmark) {
      display("Passed", totalScore);
    } else {
      display("Failed", totalScore);
    }
  }

  // Function hiển thị kết quả
  function display(message, totalScore) {
    document.getElementById("result").innerHTML =
      "Kết quả:" + message + ".Total Score: " + totalScore;
  }
}
