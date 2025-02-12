import { IconBlendMode, IconBrandGithub } from '@tabler/icons-react';
import { tm } from '../../utils/twMerge';
import { ProjdectType } from '../../utils/type';
import emptyImageIcon from '../../assets/image/readyimageIcon.png';
import { useIsMobile } from '../../utils/useIsMobile';
type CardProps = {
  list: ProjdectType;
};
const Card = ({ list }: CardProps) => {
  const isMobile = useIsMobile();
  return (
    <div className={tm(` w-full flex`, `select-none`, isMobile ? `gap-3` : `gap-10`)}>
      <div className={tm(`w-1/2 max-w-[600px] max-h-[400px] overflow-hidden`, isMobile && `w-[130px]`)}>
        <img
          src={list.mockupImage === '' || !list.mockupImage ? emptyImageIcon : list.mockupImage}
          className={tm(`w-full h-full object-cover object-center`)}
        />
      </div>

      <div className={tm(`text-white flex-1 w-1/2`, `flex flex-col gap-3`)}>
        <div className={tm(`flex flex-col gap-3`)}>
          <p className={tm(`text-2xl font-bold`)}>{list.title}</p>
          <div className={tm(`flex gap-2`)}>
            <IconBlendMode cursor={'pointer'} size={30} />
            <IconBrandGithub cursor={'pointer'} size={30} />
          </div>
          <span className={tm(`w-full h-px bg-white flex`)} />
        </div>
        <ul className={tm(`flex gap-2 flex-wrap`)}>
          {list.techs.map((tech) => (
            <li key={tech} className={tm(`border flex justify-center items-center px-2`)}>
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
