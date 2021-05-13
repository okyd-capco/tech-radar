import React, { useContext, useEffect, useState } from 'react';
import { RadarContextType, RadarContext } from './RadarContextProvider';
import styled from 'styled-components/macro';
import { icons } from './data/data';
import images from './images';
import techContent from './data/content';
import { SubContent, ExampleContent } from './Content';
import { TechContentType } from './data/content';
import BackLink from './BackLink';
type WrapperProps = {
  category: string;
};

const Wrapper = styled.div<WrapperProps>`
  position: relative;
  width: 100%;
  display: flex;
  padding-left: 90px;
  margin-top:50px;
  .background {
    opacity: 0.12;
    position: absolute;
    top: -80px;
    left: -300px;
  }
  img {
    margin: auto;
  }
`;

const StyledContent = styled.div`
  text-align: left;
  width: 1060px;
  margin: auto;
  position:relative;
  :first-child {
    display: inline-block;
  }
`;

const Title = styled.div`
  font-size: 120px;
  font-weight: 700;
  text-align: left;
  display: inline-block;
  vertical-align: middle;
  padding-right: 50px;
`;

const ContentBody = styled.div`
  width: 700px;
  margin: 0 auto;
  font-family: poppins, sans-serif;
  .content-intro {
    font-size: 24px;
    margin-bottom: 34px;
  }
`;

const CategoryPage = () => {
  const { category, technology, setCategory, setTechnology } =
    useContext<RadarContextType>(RadarContext);

  const [content, setContent] = useState<TechContentType | null>(null);
  const [imageLink, setImageLink] = useState('');

  useEffect(() => {
    let url = window.location.pathname.split('/');
    let categoryName = url[2].charAt(0).toUpperCase() + url[2].slice(1);

    // once we have content for everything technology name can come from content
    let technologyName = url[3]
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    let icon = icons.filter(
      (el: any) => el.name.toLowerCase() === technologyName.toLowerCase()
    )[0]!;

    setImageLink(icon.link);
    setTechnology(technology ? technology : technologyName);
    setCategory(categoryName);
    setContent(techContent[0]); // filter for content based on technologyName
  }, [setTechnology]);

  return (
    <>
      <Wrapper category={category}>
        <img
          className='background'
          src={(images as any)[category.toLowerCase()]}
          alt={category}
          width={650}
          height={650}
        />
        {content && (
          <StyledContent>
            <div>
              <BackLink category={category} />
              <Title>{technology}</Title>
              <a
                href={content.link}
                target='_blank'
              >
                <svg width={80} height={80}>
                  <circle cx={40} cy={40} r={40} fill={'white'} />
                  <image
                    x={15}
                    y={15}
                    href={imageLink}
                    height={50}
                    width={50}
                  />
                </svg>
              </a>
              <ContentBody>
                <div className='content-intro'>{content.intro}</div>
                <SubContent contentData={content.content} />
                <ExampleContent contentData={content.examples} />
              </ContentBody>
            </div>
          </StyledContent>
        )}
      </Wrapper>
    </>
  );
};

export default CategoryPage;