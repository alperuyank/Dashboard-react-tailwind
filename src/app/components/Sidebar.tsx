import Link from 'next/link'

const Sidebar = () => {

    return (
        <div className="h-screen bg-yellow-500 w-48 md:w-64 fixed left-0 shadow-lg hidden lg:block md:block">
            <div className="mt-8 ">
                <div className="gap-4 flex flex-col">
                    <Link href="/">
                        <div className="text-black bg-yellow-600 hover:bg-yellow-400 p-3 rounded shadow-md mb-2 hover:shadow-lg">
                            Özel Bilgiler
                        </div>
                    </Link>
                    <Link href="/">
                        <div className="text-black bg-yellow-600 hover:bg-yellow-400 p-3 rounded shadow-md mb-2 hover:shadow-lg">
                            Siparişler
                        </div>
                    </Link>
                    <Link href="/">
                        <div className="text-black bg-yellow-600 hover:bg-yellow-400 p-3 rounded shadow-md mb-2 hover:shadow-lg">
                            Kategoriler
                        </div>
                    </Link>
                    <Link href="/">
                        <div className="text-black bg-yellow-600 hover:bg-yellow-400 p-3 rounded shadow-md mb-2 hover:shadow-lg">
                            Ürünler
                        </div>
                    </Link>
                    <Link href="/">
                        <div className="text-black bg-yellow-600 hover:bg-yellow-400 p-3 rounded shadow-md mb-2 hover:shadow-lg">
                            Sliderlar
                        </div>
                    </Link>
                    <Link href="/">
                        <div className="text-black bg-yellow-600 hover:bg-yellow-400 p-3 rounded shadow-md mb-2 hover:shadow-lg">
                            Kampanyalar
                        </div>
                    </Link>
                    <Link href="/">
                        <div className="text-black bg-yellow-600 hover:bg-yellow-400 p-3 rounded shadow-md mb-2 hover:shadow-lg">
                            Sayfalar
                        </div>
                    </Link>
                    <Link href="/">
                        <div className="text-black bg-yellow-600 hover:bg-yellow-400 p-3 rounded shadow-md mb-2 hover:shadow-lg">
                            Bilgilendirmeler
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar