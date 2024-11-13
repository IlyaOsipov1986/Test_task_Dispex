import React, { useState } from 'react';
import { Layout, theme, Tree } from "antd";
import useStreets from "../utils/hooks/fetchers/useStreets";
const { Content, Sider } = Layout;

interface DataNode {
  title: string;
  key: string;
  isLeaf?: boolean;
  children?: DataNode[];
}

const initTreeData: DataNode[] = [
  { title: 'Expand to load1', key: '0' },
  { title: 'Expand to load2', key: '1' },
  { title: 'Tree Node', key: '2', isLeaf: true },
];

const updateTreeData = (list: DataNode[], key: React.Key, children: DataNode[]): DataNode[] =>
  list.map((node) => {
    if (node.key === key) {
      return {
        ...node,
        children,
      };
    }
    if (node.children) {
      return {
        ...node,
        children: updateTreeData(node.children, key, children),
      };
    }
    return node;
  });

const HomePage = () => {

  const { data: streets, isLoading } = useStreets();

  console.log(streets)

  const [treeData, setTreeData] = useState(initTreeData);

  const onLoadData = ({ key, children }: any ) =>
    new Promise<void>((resolve) => {
      if (children) {
        resolve();
        return;
      }
      setTimeout(() => {
        setTreeData((origin) =>
          updateTreeData(origin, key, [
            { title: 'Child Node', key: `${key}-0` },
            { title: 'Child Node', key: `${key}-1` },
          ]),
        );

        resolve();
      }, 1000);
    });

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
      <Layout hasSider>
        <Layout  style={{ padding: '24px 0', background: colorBgContainer, borderRadius: borderRadiusLG }}>
          <Sider style={{ background: colorBgContainer, borderRight: '1px solid gray' }} width={300}>
            {/* <Menu
              mode="inline"

              style={{ height: '100%' }}
              items={items2}
              /> */}
              <Tree style={{ height: '100%' }} loadData={onLoadData} treeData={treeData} />
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>main content</Content>
        </Layout>
      </Layout>
  )
}

export default HomePage
