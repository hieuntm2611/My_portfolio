import * as React from 'react';
import { Stack, Text, Link, FontWeights, IStackTokens, IStackStyles, ITextStyles } from '@fluentui/react';
import './App.scss';
import { Image, ImageFit } from '@fluentui/react/lib/Image';
import { FaGithub, FaFacebook, FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { GiSunflower } from 'react-icons/gi';


const boldStyle: Partial<ITextStyles> = { root: { fontWeight: FontWeights.semibold } };
const stackTokens: IStackTokens = { childrenGap: 15 };
const stackStyles: Partial<IStackStyles> = {
  root: {
    width: '960px',
    margin: '0 auto',
    textAlign: 'center',
    color: '#ffffff',
  },
};


export const App: React.FunctionComponent = () => {
  return (
    <Stack>
      <Stack className='header'>
        <Stack className='header__home'>
          <GiSunflower className='home'/>
          <Link className='header__homebtn' href="#">
            Nguyễn Trương Minh Hiếu
          </Link>
        </Stack>
        <Stack className='header__choice'>
          <Link className='header__choice--item' href="#">
            Home
          </Link>
          <Link className='header__choice--item' href="#">
            Works
          </Link>
        </Stack>
      </Stack>
      <Stack className='main'>
        <Stack className='main__head'>
          <Stack className='main__head--left'>
            <Text className='big-text text-blue'>Nguyễn Trương Minh Hiếu</Text>
            <Text className='big-text'>Developer in Ha Noi, Viet Nam</Text>
            <Stack className='link'>
              <a href='https://www.facebook.com/minhhieu2611/'>
                <FaFacebook className='icon--large blue'/>
              </a>
              <a href='https://github.com/hieuntm2611'>
                <FaGithub className='icon--large blue' />
              </a>
              <a href='https://www.linkedin.com/in/hi%E1%BA%BFu-nguy%E1%BB%85n-tr%C6%B0%C6%A1ng-minh-18a79a247/'>
                <FaLinkedin className='icon--large blue'/>
              </a>
            </Stack>
          </Stack>
          <Stack className='main__head--right'>
            <Image className='img__first'
              imageFit={ImageFit.cover}
              src='https://scontent.fhan1-1.fna.fbcdn.net/v/t39.30808-6/283397244_1366045327141238_2677502369243579270_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=nNUXYW6hxSQAX_riKqN&_nc_ht=scontent.fhan1-1.fna&oh=00_AT_ScvMk2o7k5NxBbb5GRQap11riU79LE2k_hU0FqLNlgw&oe=63076BE2'
              width={420}
              height={420}
            />
          </Stack>
        </Stack>
        <Stack className='main__second'>
          <Stack className='main__second--left'>
            <Image className='img__first'
              imageFit={ImageFit.cover}
              src='https://scontent.fhan1-1.fna.fbcdn.net/v/t39.30808-6/283884562_697773661475712_2819745899312333177_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=dvHNsT9AX0sAX8SqIYH&_nc_ht=scontent.fhan1-1.fna&oh=00_AT8R4zJHlMYKruRy8xsJbWSITpzlxLjujPB27u_qu7BPjw&oe=63077FFB'
              width={420}
              height={420}
            />
          </Stack>
          <Stack className='main__second--right'>
            <Text className='big-text'>
              Tôi là một
              <Text className='big-text text-blue'> lập trình viên</Text>
            </Text>
            <Text className='normal-text'>Tôi mong muốn trở thành nhà phát triển của công ty với mục tiêu thiết kế, xây dựng trang web và ứng dụng, đồng thời mong muốn được học hỏi, trau dồi kỹ năng trong môi trường làm việc chuyên nghiệp và thông qua các dự án thực tế.</Text>
          </Stack>
        </Stack>
        <Stack className='main__skill'>

        </Stack>
      </Stack>
      <Stack className='footer'>
        <Stack className='footer__link'>
          <a href='https://www.facebook.com/minhhieu2611/'>
            <FaFacebook className='icon--large' />
          </a>
          <a href='https://www.youtube.com/channel/UCYDlKgY7UfbHxC1X6hv8FwA'>
              <FaYoutube className='icon--large'/>
          </a>
          <a href='https://github.com/hieuntm2611'>
              <FaGithub className='icon--large'/>
          </a>
          <a href='https://www.instagram.com/hieuntm2611/'>
              <FaInstagram className='icon--large'/>
          </a>
        </Stack>
        <Text className='powered'>
          Powered by <a className='linkfb' href='https://www.facebook.com/minhhieu2611/'>Nguyen Truong Minh Hieu </a>
        </Text>
      </Stack>
    </Stack>
  );
};
