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
  var soChanCuoiCung = -1;
  for (i = arrSoN.length - 1; i >= 0 && soChanCuoiCung == -1; i--) {
    if (arrSoN[i] > 0 && arrSoN[i] % 2 == 0) {
      soChanCuoiCung = arrSoN[i];
      console.log(soChanCuoiCung);
      document.getElementById(
        "ketQuaSoChan"
      ).innerHTML = `Số chẵn cuối cùng ${soChanCuoiCung}`;
    } else {
      document.getElementById("ketQuaSoChan").innerHTML = -1;
    }
  }
});

    // Câu 6: Đổi chỗ
document.getElementById("btnDoiCho").addEventListener("click", function () {
  var So1 = document.getElementById("So1").value * 1;
  var So2 = document.getElementById("So2").value * 1;

  if (
    So1 >= 0 &&
    So1 < arrSoN.length &&
    So2 >= 0 &&
    So2 < arrSoN.length
  ) {
    // console.log(arrSoN[So1]);
    // console.log(arrSoN[So2]);
    var tamThoi = arrSoN[So1];
    arrSoN[So1] = arrSoN[So2];
    arrSoN[So2] = tamThoi;
    // console.log(arrSoNhap);
    document.getElementById(
      "ketQuaDoiCho"
    ).innerHTML = `Mảng dãy số sau khi đã đổi chỗ vị trí 2 giá trị là: ${arrSoN}`;
  } else {
    alert("Yêu cầu nhập vào vị trí hợp lệ");
  }
});

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
document.getElementById("btnSoNguyenTo").addEventListener("click", function () {
  function checkSo(nb) {
    if (nb <= 1) return false;
    for (var z = 2; z <= Math.sqrt(nb); z++) {
      if (nb % z === 0) return false;
    }
    return true;
  }
  var soNguyenToDauTien = "";
  for (var i = 0; i < arrSoN.length; i++) {
    if (checkSo(arrSoN[i])) {
      soNguyenToDauTien += arrSoN[i];
      document.getElementById(
        "ketQuaSoNguyenTo"
      ).innerHTML = `Số ${soNguyenToDauTien} là số nguyên tố đầu tiên trong mảng dãy số`;
      return;
    } else {
      document.getElementById("ketQuaSoNguyenTo").innerHTML = -1;
    }
  }
});
    // Câu 9: Đếm số nguyên
document.getElementById("btnSoNguyen").addEventListener("click", function () {
  var arrNhapSoThuc = [];
  var demSoNguyen = 0;
  for (a = 0; a < arrNhapSoThuc.length; a++) {
    if (arrNhapSoThuc[a] % 1 == 0) {
      demSoNguyen++;
    }
  }
  document.getElementById(
    "ketQuaDemSoNguyen"
  ).innerHTML = `Kết quả đếm được ${demSoNguyen} số nguyên`;
});


    // Câu 10: So sánh số lượng số âm và dương
document.getElementById("btnSoAmDuong").addEventListener("click", function () {
  var soDuongSoSanh = 0;
  var soAmSoSanh = 0;

  for (i = 0; i < arrSoN.length; i++) {
    if (arrSoN[i] < 0) {
      soAmSoSanh++;
    } else if (arrSoN[i] > 0) {
      soDuongSoSanh++;
    }
  }
  if (soDuongSoSanh > soAmSoSanh) {
    document.getElementById("ketQuaSoAmDuong").innerHTML = "số Dương > số Âm";
  } else if (soDuongSoSanh < soAmSoSanh) {
    document.getElementById("ketQuaSoAmDuong").innerHTML = "Số Dương < số Âm";
  } else {
    document.getElementById("ketQuaSoAmDuong").innerHTML = "số Dương = số Âm";
  }
});