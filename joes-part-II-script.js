document.addEventListener( 'DOMContentLoaded', function () {

    const HOTDOG_COST = 4.00;
    const FRIES_COST = 3.50;
    const SODA_COST = 1.75;

    const MASS_TAX = 0.0625;

    const submitBtn = document.getElementById('order-submit');
    const emptyOrderError = document.getElementById('empty-order-error');

    const hotdogSelector = document.getElementById('hotdogs-select');
    const friesSelector = document.getElementById('fries-select');
    const sodaSelector = document.getElementById('sodas-select');

    const subtotalRow = document.getElementById('subtotal-row');
    const subtotalValue = document.getElementById('subtotal-value');
    const taxRow = document.getElementById('tax-row');
    const taxValue = document.getElementById('tax-value');
    const totalRow = document.getElementById('total-row');
    const totalValue = document.getElementById('total-value');

    const getSubtotal = () => {
        return hotdogSelector.value * HOTDOG_COST
            + friesSelector.value * FRIES_COST
            + sodaSelector.value * SODA_COST
    };
    // Convert cost to string with $ and 2 digits after the decimal point
    const formatCost = (cost) => '$' + cost.toFixed(2).toString();

    let submitted = false;
    const onEmptyOrder = () => {
        emptyOrderError.classList.remove('hidden');
    };
    const onRealOrder = (subtotal) => {
        emptyOrderError.classList.add('hidden');
        submitBtn.disabled = true;
        const tax = subtotal * MASS_TAX;
        const total = subtotal + tax;
        subtotalValue.textContent = formatCost(subtotal);
        subtotalRow.classList.remove('hidden');
        taxValue.textContent = formatCost(tax);
        taxRow.classList.remove('hidden');
        totalValue.textContent = formatCost(total);
        totalRow.classList.remove('hidden');
    }
    const onSubmitOrder = () => {
        const subtotal = getSubtotal();
        if (subtotal === 0.0) {
            // Nothing ordered
            onEmptyOrder();
        } else {
            submitted = true;
            onRealOrder(subtotal);
        }
    };

    submitBtn.addEventListener('click', onSubmitOrder);

} );