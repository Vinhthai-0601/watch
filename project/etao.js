function supporthHtml5() {
    return (typeof(Worker) !== "undefined") ? true : false;
}

function addfavorite(theUrl) {
    if (document.all) {
        window.external.addFavorite(theUrl, 'Luxury Watches Web Order');
    }
    else if (window.sidebar) {
        window.sidebar.addPanel('Luxury Watches Web Order', theUrl, '');
    }
}

$(document).ready(function() {
    jQuery.ajaxSetup({cache:false});
});

//select all items
function selectAll() {
    var aChecked = $(".select_all").prop("checked");
    if (typeof(aChecked) == "undefined") {aChecked = false;}
    $(".selectable").each(function() {
        if (typeof($(this).attr("disabled")) == "undefined") {
            var subchecked = $(this).prop("checked");
            if (subchecked != aChecked) {
                $(this).prop("checked", aChecked);
            }
        }
    });
}

function EnsureDecimal(e) {
    e.value = e.value.replace(/[^\d.]/g,""); //Đầu tiên hãy thay thế mọi thứ không phải là số, ngoại trừ số và.
    e.value = e.value.replace(/^\./g,""); //Nó phải được đảm bảo rằng cái đầu tiên là một số chứ không phải.
    e.value = e.value.replace(/\.{2,}/g,"."); //Nó được đảm bảo rằng chỉ một xuất hiện, và không nhiều.
    e.value = e.value.replace(".","$#$").replace(/\./g,"").replace("$#$","."); //Đảm bảo. Chỉ xuất hiện một lần, không quá hai lần
}

function EnsureInt() {
    if (((event.keyCode < 48) || (event.keyCode > 57))) {
       event.returnValue = false;
    }
}

/*********************HTML5 Notification Functions **************************************/

/**
 * Số tiền được phân tách bằng hàng nghìn bởi dấu phẩy
 * @character_set UTF-8
 * @author Jerry.li(hzjerry@gmail.com)
 * @version 1.2014.08.24.2143
 *  Example
 *  <code>
 *      alert($.formatMoney(1234.345, 2)); //=>1,234.35
 *      alert($.formatMoney(-1234.345, 2)); //=>-1,234.35
 *      alert($.unformatMoney(1,234.345)); //=>1234.35
 *      alert($.unformatMoney(-1,234.345)); //=>-1234.35
 *  </code>
 */
!(function($)
		{
		    $.extend({
		        /**
		         * Định dạng số hàng nghìn
		         * @public
		         * @param mixed mVal Giá trị số
		         * @param int iAccuracy Độ chính xác thập phân (mặc định là 2)
		         * @return string
		         */
		        formatMoney:function(mVal, iAccuracy){
		            var fTmp = 0;//Các biến tạm thời
		            var iFra = 0;//Phần thập phân
		            var iInt = 0;//Phần nguyên
		            var aBuf = new Array(); //Bộ đệm (temp output)
		            var bPositive = true; //Lưu các điểm đánh dấu giá trị âm và dương(true:số dương)
		            /**
		             * Xuất ra chuỗi ký tự có độ dài cố định, không đủ để điền vào 0
		             * <li> Đóng chức năng </li>
		             * @param int iVal Giá trị
		             * @param int iLen Chiều dài khi ra
		             */
		            function funZero(iVal, iLen){
		                var sTmp = iVal.toString();
		                var sBuf = new Array();
		                for(var i=0,iLoop=iLen-sTmp.length; i<iLoop; i++)
		                    sBuf.push('0');
		                sBuf.push(sTmp);
		                return sBuf.join('');
		            };

		            if (typeof(iAccuracy) === 'undefined')
		                iAccuracy = 2;
		            bPositive = (mVal >= 0);//Lấy ra bảng hiệu
		            fTmp = (isNaN(fTmp = parseFloat(mVal))) ? 0 : Math.abs(fTmp);//Ép các giá trị đến tuyệt đới trước sau phẩy thập phân
		            //Tất cả nội dung được xử lý với các quy tắc chung
		            iInt = parseInt(fTmp); //Tách phần nguyên
		            iFra = parseInt((fTmp - iInt) * Math.pow(10,iAccuracy) + 0.5); //Tách phần thập phân (làm tròn)

		            do{
		                aBuf.unshift(funZero(iInt % 1000, 3));
		            }while((iInt = parseInt(iInt/1000)));
		            aBuf[0] = parseInt(aBuf[0]).toString();//Xóa số 0 ở đầu trong khu vực phân khúc cao nhất
		            return ((bPositive)?'':'-') + aBuf.join(',') +'.'+ ((0 === iFra)?'00':funZero(iFra, iAccuracy));
		        },
		        /**
		         * Chuyển đổi chuỗi số ở định dạng hàng nghìn thành số dấu phẩy động
		         * @public
		         * @param string sVal Chuỗi số
		         * @return float
		         */
		        unformatMoney:function(sVal){
		            var fTmp = parseFloat(sVal.replace(/,/g, ''));
		            return (isNaN(fTmp) ? 0 : fTmp);
		        },
		    });
		})(jQuery);
