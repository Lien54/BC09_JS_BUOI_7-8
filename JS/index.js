var arrSoN = [];
document.getElementById("btnMangSoN").onclick = function () {
  var soN = document.getElementById("txt-soN").value * 1;
  arrSoN.push(soN);
  console.log(arrSoN);
  document.getElementById("inKetQuaThemSoN").innerHTML = arrSoN;
};

    // Câu 1: Tính tổng số dương
document
  .getElementById("btnTongSoDuong")
  .addEventListener("click", function () {
    var tong = 0;
    var count = 0;
    for (var i = 0; i < arrSoN.length; i++) {
      if (arrSoN[i] > 0) {
        tong += arrSoN[i];
        count++;
      }
    }
    document.getElementById("inKetQuaTong").innerHTML = tong;
  });

    // Câu 2: Đếm số dương
document.getElementById("btnDemSoDuong").addEventListener("click", function () {
  var count = 0;
  for (var i = 0; i < arrSoN.length; i++) {
    if (arrSoN[i] > 0) {
      count++;
    }
  }
  document.getElementById("inKetQuaDem").innerHTML = count;
});

    // Câu 3: Tìm số nhỏ nhất
document.getElementById("btnSoNhoNhat").addEventListener("click", function () {
    var soNhoNhat = Infinity;
    for (var i = 0; i < arrSoN.length; i++) {
        number = arrSoN[i];
        if (number < soNhoNhat) {
            soNhoNhat = number;
        }
    }
    document.getElementById("inSoNhoNhat").innerHTML = soNhoNhat;
});

    // Câu 4: Tìm số dương nhỏ nhất
document.getElementById("btnketQuaSoDuongNhoNhat").addEventListener("click", function () {
    var soMinDuong= Infinity;
    for (var i = 0; i < arrSoN.length; i++) {
      so = arrSoN[i];
      if (so > 0 && so < soMinDuong) {
        soMinDuong = so;
      }
    }
    document.getElementById("inSoDuongNhoNhat").innerHTML = soMinDuong;
});

    // Câu 5: Tìm số chẵn cuối cùng
document.getElementById("btnSoChan").addEventListener("click", function () {
    var soChan= Infinity;
    for (var i = 0; i < arrSoN.length; i++) {
      nb = arrSoN[i];
      if (so < soMinDuong) {
        soMinDuong = so;
      }
    }
    document.getElementById("inSoChan").innerHTML = soMinDuong;
});

    // Câu 6: Đổi chỗ


    // Câu 7: Sắp xếp tăng dần
document.getElementById('btnSapxep').addEventListener('click', function () {
    var newArrSoN = arrSoN.sort();
    console.log(newArrSoN);
    newArrSoN = arrSoN.sort(function (a, b) {
        return a -b;
    })
    console.log(newArrSoN);
    document.getElementById("inSapxep").innerHTML = newArrSoN;
})

    // Câu 8: Tìm số nguyên tố đầu tiên
document.getElementById('btnSoNguyenTo').onclick = function () {
    for (i = 2; i <= a - 1; i++) {
        if (a % i == 0) {
            console.log("Not Prime");
            return;
        }
    }
    console.log("Prime");
    return;
    document.getElementById("inSoChan").innerHTML = soMinDuong;
}
    // Câu 9: Đếm số nguyên


    // Câu 10: So sánh số lượng số âm và dương
