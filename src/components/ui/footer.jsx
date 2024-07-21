import texts from '../../utils/texts.json';
import SocialButtons from './SocialButtons';

function Footer() {
  return (
    <footer className=''>
      <div className='mx-auto px-4 sm:px-1'>
        {/* Top area: Blocks */}
        <div className='grid  lg:grid-cols-7 gap-8 py-8 md:py-12 border-t border-gray-200 '>
          {/* 1st block */}
          <div
            className='sm:col-span-2 md:col-span-3 lg:col-span-3 text-start ml-20'
            style={{ maxWidth: '600px' }}
          >
            <div
              className='font-bold flex items-center gap-4'
              style={{ color: '#FFFFFF', fontSize: '25px' }}
            >
              <img
                src='https://res.cloudinary.com/db60chvpz/image/upload/v1717141705/xmmqv1s6b0uuozbwyr5o.png'
                alt='logo'
                width={250}
              />
            </div>
            <div className='text-white mt-10'>
              <ul className='text-sm'>
                <li className='mb-3'>
                  <span className='  transition duration-150 ease-in-out'>
                    {texts['section-seven']['section-1'].delivery}
                  </span>
                  <span className='border mx-4'></span>
                  <span className='  transition duration-150 ease-in-out'>
                    {texts['section-seven']['section-1'].delivery}
                  </span>
                </li>
                <li className='mb-3'>
                  <span className=' transition duration-150 ease-in-out'>
                    {texts['section-seven']['section-1'].oficinas}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* 3rd block */}
          <div
            className='sm:col-span-2 md:col-span-3 lg:text-end sm: text-center'
            style={{ color: '#A1A1AA' }}
          >
            <ul className='text-sm'>
              <li className='mb-3'>
                <span className=' hover:text-gray-900 transition duration-150 ease-in-out'>
                  {texts['section-seven']['section-2'].item1}
                </span>
              </li>
              <li className='mb-3'>
                <span className=' hover:text-white transition duration-150 ease-in-out'>
                  {texts['section-seven']['section-2'].item2}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <SocialButtons />
    </footer>
  );
}
export default Footer;
