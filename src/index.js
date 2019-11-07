/**
 * Specifications:
 *   When the value of the radio button is text
 *   display as shown in result1.png
 *   otherwise, display as shown in result2.png
 * Note:
 *   1. please reference style_guide.jpg for design template (can use styled-component)
 *   2. You can change the file structure, names and content to plan the components structure
 *   3. You do not need to implement search or reset functions
 *
 * 完成需求：
 *    當 Radio button 的值是 Text 時，
 *    會顯示 result1.png
 *    否則顯示 result2.png
 * 備註：
 * 1. 請參考 style_guide.jpg 設計樣式 (可使用 styled-component)
 * 2. 可自行變更資料夾檔案名稱或內容，規劃 component 結構
 * 3. 不需要實作 Search 和 Reset 按鈕的行為
 */
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./styles.css";
import { Radio, Input, Button, Select, DatePicker } from "antd";
const Option = Select.Option;

class App extends Component {
  state = {
    type: "text"
  };
  onTypeChange = e => {
    this.setState({
      type: e.target.value
    });
  };
  render() {
    return (
      /* JSX code */
      <div className="container">
        <Radio.Group onChange={this.onTypeChange} value={this.state.type} className="radioGroup">
          <Radio value="text" name="restulType">
            Text
          </Radio>
          <Radio value="date" name="restulType">
            Date
          </Radio>
        </Radio.Group>
        {this.state.type === "text" ? (
          <div>
            <Input placeholder="Search name" />
            <div className="buttonContainer">
                <Button>Reset</Button>
                <Button type="primary">Search</Button>
            </div>
          </div>
        ) : null}
        {this.state.type === "date" ? (
          <div>
            <Select showSearch defaultValue="before" className="fullWidth">
              <Option value="before">before</Option>
              <Option value="after">after</Option>
            </Select>
            <DatePicker className="fullWidth"/>
            <div className="buttonContainer">
                <Button>Reset</Button>
                <Button type="primary">Search</Button>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
