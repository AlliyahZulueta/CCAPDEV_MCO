function redirectToPage(laundryShopName) {
    let pageName;

    switch (laundryShopName) {
        case 'Weclean':
            pageName = 'Weclean.html';
            break;
        case 'Nonstop Laundry Shop Malate':
            pageName = 'NonstopLaundryShopMalate.html';
            break;
        case '7Folds Laundry':
            pageName = '7FoldsLaundry.html';
            break;
        case 'XYZ Laundry Service':
            pageName = 'XYZILaundryService.html';
            break;
        default:
            pageName = 'default.html'; // You can set a default page or handle it as needed.
            break;
    }

    window.location.href = pageName;
}
