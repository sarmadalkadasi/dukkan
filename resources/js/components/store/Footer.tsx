const Footer = () => {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gray-100 text-sm dark:text-black">
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <a href="/">
            <div className="text-2xl tracking-wide">Open Shop</div>
          </a>
          <p>
           Riydh, Saudi Arabia
          </p>
          <span className="font-semibold">info@openshop.com</span>
          <span className="font-semibold">+966531441305</span>
          <div className="flex gap-6">
            <img src="/facebook.png" alt="" width={16} height={16} />
            <img src="/instagram.png" alt="" width={16} height={16} />
            <img src="/youtube.png" alt="" width={16} height={16} />
            <img src="/pinterest.png" alt="" width={16} height={16} />
            <img src="/x.png" alt="" width={16} height={16} />
          </div>
        </div>
        {/* CENTER */}
        <div className="hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">COMPANY</h1>
            <div className="flex flex-col gap-6">
              <a href="">About Us</a>
              <a href="">Careers</a>
              <a href="">Affiliates</a>
              <a href="">Blog</a>
              <a href="">Contact Us</a>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">SHOP</h1>
            <div className="flex flex-col gap-6">
              <a href="">New Arrivals</a>
              <a href="">Accessories</a>
              <a href="">Men</a>
              <a href="">Women</a>
              <a href="">All Products</a>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">HELP</h1>
            <div className="flex flex-col gap-6">
              <a href="">Customer Service</a>
              <a href="">My Account</a>
              <a href="">Find a Store</a>
              <a href="">Legal & Privacy</a>
              <a href="">Gift Card</a>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-medium text-lg">SUBSCRIBE</h1>
          <p>
            Be the first to get the latest news about trends, promotions, and
            much more!
          </p>
            <div className="flex">
            <input
              type="text"
              placeholder="Email address"
              className="p-4 w-3/4 dark:border-black border"
            />
            <button className="w-1/4 bg-lightPink text-white">JOIN</button>
            </div>
          <span className="font-semibold">Secure Payments</span>
          <div className="flex justify-between">
            <img src="/discover.png" alt="" width={40} height={20} />
            <img src="/skrill.png" alt="" width={40} height={20} />
            <img src="/paypal.png" alt="" width={40} height={20} />
            <img src="/mastercard.png" alt="" width={40} height={20} />
            <img src="/visa.png" alt="" width={40} height={20} />
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div className="">© 2025 Dukkan</div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="">
            <span className="text-gray-500 mr-4">Language</span>
            <span className="font-medium"> Arabic</span>
          </div>
          <div className="">
            <span className="text-gray-500 mr-4">Currency</span>
            <span className="font-medium">SAR</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;