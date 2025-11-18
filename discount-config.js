// اعمال کد تخفیف
function applyDiscount() {
    const discountCode = document.getElementById('discountCode').value.trim();
    const discountMessage = document.getElementById('discountMessage');
    
    if (discountCode.toUpperCase() === DISCOUNT_CONFIG.VALID_CODE) {
        discountApplied = true;
        discountMessage.innerHTML = `<span class="discount-success">✅ کد تخفیف با موفقیت اعمال شد! ${DISCOUNT_CONFIG.DISCOUNT_MESSAGE}</span>`;
        
        // اگر بسته‌ای انتخاب شده، قیمت نهایی را محاسبه کن
        if (selectedPackage) {
            const finalPrice = Math.max(selectedPackage.price - DISCOUNT_CONFIG.DISCOUNT_AMOUNT, 0);
            document.getElementById('selectedInfo').innerHTML = `
                ✅ بسته انتخاب شده: <strong>${selectedPackage.size}</strong>
                - مبلغ اصلی: <strong>${formatPrice(selectedPackage.price)} تومان</strong>
                - مبلغ با تخفیف: <strong>${formatPrice(finalPrice)} تومان</strong>
                <br>✅ کد تخفیف اعمال شد!
            `;
        }
    } else {
        discountApplied = false;
        discountMessage.innerHTML = '<span class="discount-error">❌ کد تخفیف نامعتبر است</span>';
        
        if (selectedPackage) {
            document.getElementById('selectedInfo').innerHTML = `
                ✅ بسته انتخاب شده: <strong>${selectedPackage.size}</strong>
                - مبلغ: <strong>${formatPrice(selectedPackage.price)} تومان</strong>
            `;
        }
    }
}
