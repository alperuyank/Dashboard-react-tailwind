// src/app/dashboard/page.tsx
import React from 'react';
import { fetchDashboardData } from '../lib/fetchData';
import { DashboardData } from '../types/index';

const Dashboard = async () => {
  const data: DashboardData[] = await fetchDashboardData();

  return (
    <div className='md:ml-64  ml-100 bg-slate-300 w-{calc(100vh-2rem)} h-[calc(100vh-4rem)] overflow-x-hidden  justify-center'>
      <div className="grid grid-cols-3 gap-4 flex-col ml-11 md:ml-2 mt-8">
        <div className='h-32 w-64 bg-slate-100 uppercase rounded-md'>
          <h1 className=' m-4'>Son Teslim Edilen Sipariş Süresi</h1>
        </div>
        <div className='h-32 w-64 bg-slate-100 uppercase rounded-md '>
          <h1 className=' m-4'>Dağıtım Bekleyen Siparişler</h1>
        </div>
        <div className='h-32 w-64 bg-slate-100 uppercase rounded-md'>
          <h1 className=' m-4'>Dağıtımdaki Siparişler</h1>
        </div>
        <div className='h-32 w-64 bg-slate-100 uppercase rounded-md'>
          <h1 className=' m-4'>Bugün Teslim Edilen Siparişler</h1>
        </div>
        <div className='h-32 w-64 bg-slate-100 uppercase rounded-md'>
          <h1 className=' m-4'>Bugün İptal Edilen Siparişler</h1>
        </div>

      </div>
      <div className="overflow-x-auto my-4">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">Sıra</th>
              <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">Tarih</th>
              <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">Sipariş Numarası</th>
              <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">Ad Soyad</th>
              <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">Depo</th>
              <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">Ödeme Tipi</th>
              <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">Fiyat</th>
              <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">Durum</th>
              <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">Mağaza</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id} className="hover:bg-gray-100 transition-colors">
                <td className="py-2 px-4 border-b border-gray-200 text-gray-800">{item.order_no}</td>
                <td className="py-2 px-4 border-b border-gray-200 text-gray-800">01.08.2024</td>
                <td className="py-2 px-4 border-b border-gray-200 text-gray-800">{item.id}</td>
                <td className="py-2 px-4 border-b border-gray-200 text-gray-800">{item.name}</td>
                <td className="py-2 px-4 border-b border-gray-200 text-gray-800">{item.store}</td>
                <td className="py-2 px-4 border-b border-gray-200 text-gray-800">{item.payment_type}</td>
                <td className="py-2 px-4 border-b border-gray-200 text-gray-800">{item.price}₺</td>
                <td className="py-2 px-4 border-b border-gray-200 text-gray-800">{item.status}</td>
                <td className="py-2 px-4 border-b border-gray-200 text-gray-800">{item.store}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <div className='relative flex-row ml-2 bg-slate-100'>
        <div className="my-2 font-bold">Siparişler</div>
        <div className='my-2'>
          <div className="text-lg">İşlem Bekleyenler</div>
          <div className="text-sm">Devam Eden Siparişler</div>
        </div>

        <div className="bg-slate-100 my-2">asdadssaddsa</div>
      </div> */}
    </div>



    // <div className="ml-0 flex items-center justify-center">
    //   <h1 className="text-2xl font-bold mb-4">Dashboard Verileri</h1>
    //   <ul>
    //     {data.map(item => (
    //       <li key={item.id} className="mb-4 p-4 border border-gray-200 rounded-lg">
    //         <h2 className="text-xl font-semibold">{item.name}</h2>
    //         <p><strong>Sipariş Numarası:</strong> {item.order_no}</p>
    //         <p><strong>Ödeme Türü:</strong> {item.payment_type}</p>
    //         <p><strong>Fiyat:</strong> ${item.price}</p>
    //         <p><strong>Durum:</strong> {item.status}</p>
    //         <p><strong>Mağaza:</strong> {item.store}</p>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
};

export default Dashboard;
