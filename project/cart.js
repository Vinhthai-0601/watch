$(document).ready(function() {

    /*
     * Tổng số tiền của từng sản phẩm
     */
    function getSubTotal(row) {
        var price = parseFloat($(row).find(".selling-price").data("bind"));
        var qty = parseInt($(row).find(":text").val());
        var result = price * qty;
        $(row).find(".selling-price").text($.formatMoney(price, 2));
        $(row).find(".subtotal").text($.formatMoney(result, 2)).data("bind", result.toFixed(2));
    };

    /*
     * Tính lượng sản phẩm tích lũy trong cửa hàng
     */
    function getTotal() {
        var qtyTotal = 0;
        var itemCount = 0;
        var priceTotal = 0;
        $(cartTable).find("tr:gt(0)").each(function() {
            getSubTotal(this);
            if ($(this).find(":checkbox").prop("checked") == true) {
                itemCount++;
                qtyTotal += parseInt($(this).find(":text").val());
                priceTotal += parseFloat($(this).find(".subtotal").data("bind"));
            }
        });
        $("#itemCount").text(itemCount).data("bind", itemCount);
        $("#qtyCount").text(qtyTotal).data("bind", qtyTotal);
        $("#priceTotal").text($.formatMoney(priceTotal, 2)).data("bind", priceTotal.toFixed(2));
    };

    var cartTable = $("#cartTable");

    getTotal();

    //Chỉ định nhấp chuột cho từng box
    $(cartTable).find(":checkbox").click(function() {
        //Chọn tất cả nhấp chuột
        if ($(this).hasClass("check-all")) {
            var checked = $(this).prop("checked");
            $(cartTable).find(".check-one").prop("checked", checked);
        }

        //Nếu bạn nhấp vào tất cả các hộp kiểm một cách thủ công, bạn cần tự động chọn hoặc hủy "Chọn tất cả"
        var items = cartTable.find("tr:gt(0)");
        $(cartTable).find(".check-all").prop("checked", items.find(":checkbox:checked").length == items.length);
        //Thiết lập nút thanh toán  disabled thuộc tính
        $("#btn_settlement").attr("disabled", items.find(":checkbox:checked").length == 0);

        getTotal();
    });

    //Cung cấp sự kiện nhấp chuột cho số được điều chỉnh + -sign và tính toán lại tổng phụ của sản phẩm
    /*
     * Liên kết sự kiện nhấp chuột với mỗi hàng trong giỏ hàng và liên kết sự kiện bàn phím với hộp nhập liệu trong mỗi hàng
     * Thực hiện các hành động khác nhau dựa trên yếu tố đã kích hoạt sự kiện
      *   Tăng thêm sô lượng của
      * giảm số lượng
      * Xóa sản phẩm
     */
    $(cartTable).find("tr:gt(0)").each(function() {
        var input = $(this).find(":text");

        //Thêm sự kiện vào hộp nhập số lượng, tính tổng phụ của số tiền và cập nhật tổng số
        $(input).keyup(function() {
            var val = parseInt($(this).val());
            if (isNaN(val) || (val < 1)) { $(this).val("1"); }
            getSubTotal($(this).parent().parent()); //tr element
            getTotal();
        });

        //Thêm sự kiện nhấp chuột cho nút điều chỉnh số lượng, xóa, tính tổng phụ của số tiền và cập nhật tổng số
        $(this).click(function() {
            var val = parseInt($(input).val());
            if (isNaN(val) || (val < 1)) { val = 1; }

            if ($(window.event.srcElement).hasClass("minus")) {
                if (val > 1) val--;
                input.val(val);
                getSubTotal(this);
            }
            else if ($(window.event.srcElement).hasClass("plus")) {
                if (val < 9999) val++;
                input.val(val);
                getSubTotal(this);
            }
            else if ($(window.event.srcElement).hasClass("delete")) {
                if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này khỏi giỏ hàng không？")) {
                    $(this).remove();
                }
            }
            getTotal();
        });
    });
});
