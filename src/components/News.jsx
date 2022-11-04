import React from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';

import { useGetNewsQuery } from '../services/newsAPI';

const {Text, Title} = Typography;
const { Option } = Select;


const News = ({simplified}) => {
    const { data: cryptoNews } = useGetNewsQuery({ newsCategory: 'Cryptocurrency', count: simplified ? 6 : 12 });
   
    if(!cryptoNews?.value) return 'Loading...';

  return (
    <Row gutter={[24, 24]}>
      {cryptoNews.value.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>{news.name}</Title>
                <img style={{maxWidth: '200px', maxHeight: '100px'}} src={news?.image?.thumbnail?.contentUrl || 'https://www.bing.com/th?id=OVFT.9X5Zq0Z0Z0Z0Z0Z0Z0Z0Z0Z&w=300&h=300&c=7&rs=1&qlt=90&cdv=1&pid=3.1&rm=2'} alt="news" />
              </div>
              <p>
                {news.description > 100 ? `${news.description.substring(0, 100)}...` : news.description}
              </p>
              <div className="provider-container">
                <div>
                  <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || 'https://www.bing.com/th?id=OVFT.9X5Zq0Z0Z0Z0Z0Z0Z0Z0Z0Z&w=300&h=300&c=7&rs=1&qlt=90&cdv=1&pid=3.1&rm=2'} alt="" />
                  <Text className="provider-name">{news.provider[0]?.name}</Text>
                </div>
                <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>

  )
}

export default News