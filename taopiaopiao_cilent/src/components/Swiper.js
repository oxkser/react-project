import React, { Component } from 'react'
import {  Carousel, WingBlank } from 'antd-mobile';
export default class Swiper extends Component {
    constructor(){
        super()
        this.state={
            data: [
                'https://gw.alicdn.com/i4/TB1nW_EnUz1gK0jSZLeXXb9kVXa_.jpg_600x600Q30.jpg_.webp',
                'https://gw.alicdn.com/i2/TB1vmuLnAT2gK0jSZFkXXcIQFXa_.jpg_600x600Q30.jpg_.webp',
                'https://gw.alicdn.com/i1/TB1wFDFnUT1gK0jSZFrXXcNCXXa_.jpg_600x600Q30.jpg_.webp',
                'https://gw.alicdn.com/i3/TB1QhPwlYj1gK0jSZFOXXc7GpXa_.jpg_600x600Q30.jpg_.webp'
              ]
        }
    }
    render() {
        return (
            <div>
                <WingBlank>
          <Carousel className="space-carousel"
            frameOverflow="visible"
            cellSpacing={10}
            slideWidth={0.8}
            autoplay
            infinite
            // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
            afterChange={index => this.setState({ slideIndex: index })}
          >
            {this.state.data.map((val, index) => (
              <a
                key={val}
                style={{
                  display: 'block',
                  position: 'relative',
                  top: this.state.slideIndex === index ? -10 : 0,
                  height: this.state.imgHeight,
                  boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                }}
              >
                <img
                  src={`${val}`}
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top' }}
                  onLoad={() => {
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                  }}
                />
              </a>
            ))}
          </Carousel>
        </WingBlank>
            </div>
        )
    }
}
