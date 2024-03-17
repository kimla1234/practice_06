const BannerCom = () => {
  return (
    <div>
      <section
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://z-p3-scontent.fpnh5-3.fna.fbcdn.net/v/t39.30808-6/429985647_395565899890583_1272062363923556458_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHV3yq1NHLug_4FK5R6v6fiL9bUoSFRpp0v1tShIVGmnccqt1rRLOpK5Wga9cGp97rLWQkmA6Z5u1v71Sbuaf3Q&_nc_ohc=p40MT1uoBFUAX_cKS-8&_nc_zt=23&_nc_ht=z-p3-scontent.fpnh5-3.fna&oh=00_AfCmYeM3I5Ks16ZqqpjD3f6-BB5xB0QhKRdn7xVicQKCCA&oe=65FC1B61)",
        }}
      >
        {/* Overlay to darken the image */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Content */}
        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl  ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
              Center of Science and Technology Advanced Development
              <strong className="block font-extrabold text-rose-700"></strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-md/relaxed text-white">
              CSTAD is a noteworthy science and technology center in Cambodia.
              CSTAD has routed Cambodian students to advanced science and
              technology, research, and develop digital skills and our graduates
              have been guaranteed excellent job opportunities with the Top IT
              company.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                className="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Enroll Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BannerCom;
