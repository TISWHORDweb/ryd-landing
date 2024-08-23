
import Footertwo from '@/src/components/footers/Footertwo';
import Headertwo from '@/src/components/headers/Headertwo';

const LayoutTwo = ({ children }) => {
   return (
      <> 
         <Headertwo/>
         {children}
         <Footertwo/>
      </>
   );
};

export default LayoutTwo;