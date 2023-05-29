export const userMenusList = [
  {
    code: 0,
    data: [
      {
        id: 38,
        name: '系统总览',
        type: 1,
        url: '/main/analysis',
        icon: 'el-icon-monitor',
        sort: 1,
        children: [
          {
            id: 39,
            url: '/main/analysis/overview',
            name: '核心技术',
            sort: 106,
            type: 2,
            children: null,
            parentId: 38
          },
          {
            id: 40,
            url: '/main/analysis/dashboard',
            name: '商品统计',
            sort: 107,
            type: 2,
            children: null,
            parentId: 38
          }
        ]
      },
      {
        id: 1,
        name: '系统管理',
        type: 1,
        url: '/main/system',
        icon: 'el-icon-setting',
        sort: 2,
        children: [
          {
            id: 2,
            url: '/main/system/user',
            name: '用户管理',
            sort: 100,
            type: 2,
            children: [
              {
                id: 5,
                url: null,
                name: '创建用户',
                sort: null,
                type: 3,
                parentId: 2,
                permission: 'system:users:create'
              },
              {
                id: 6,
                url: null,
                name: '删除用户',
                sort: null,
                type: 3,
                parentId: 2,
                permission: 'system:users:delete'
              },
              {
                id: 7,
                url: null,
                name: '修改用户',
                sort: null,
                type: 3,
                parentId: 2,
                permission: 'system:users:update'
              },
              {
                id: 8,
                url: null,
                name: '查询用户',
                sort: null,
                type: 3,
                parentId: 2,
                permission: 'system:users:query'
              }
            ],
            parentId: 1
          },
          {
            id: 3,
            url: '/main/system/department',
            name: '部门管理',
            sort: 101,
            type: 2,
            children: [
              {
                id: 17,
                url: null,
                name: '创建部门',
                sort: null,
                type: 3,
                parentId: 3,
                permission: 'system:department:create'
              },
              {
                id: 18,
                url: null,
                name: '删除部门',
                sort: null,
                type: 3,
                parentId: 3,
                permission: 'system:department:delete'
              },
              {
                id: 19,
                url: null,
                name: '修改部门',
                sort: null,
                type: 3,
                parentId: 3,
                permission: 'system:department:update'
              },
              {
                id: 20,
                url: null,
                name: '查询部门',
                sort: null,
                type: 3,
                parentId: 3,
                permission: 'system:department:query'
              }
            ],
            parentId: 1
          },
          {
            id: 4,
            url: '/main/system/menu',
            name: '菜单管理',
            sort: 103,
            type: 2,
            children: [
              {
                id: 21,
                url: null,
                name: '创建菜单',
                sort: null,
                type: 3,
                parentId: 4,
                permission: 'system:menu:create'
              },
              {
                id: 22,
                url: null,
                name: '删除菜单',
                sort: null,
                type: 3,
                parentId: 4,
                permission: 'system:menu:delete'
              },
              {
                id: 23,
                url: null,
                name: '修改菜单',
                sort: null,
                type: 3,
                parentId: 4,
                permission: 'system:menu:update'
              },
              {
                id: 24,
                url: null,
                name: '查询菜单',
                sort: null,
                type: 3,
                parentId: 4,
                permission: 'system:menu:query'
              }
            ],
            parentId: 1
          },
          {
            id: 25,
            url: '/main/system/role',
            name: '角色管理',
            sort: 102,
            type: 2,
            children: [
              {
                id: 26,
                url: null,
                name: '创建角色',
                sort: null,
                type: 3,
                parentId: 25,
                permission: 'system:role:create'
              },
              {
                id: 27,
                url: null,
                name: '删除角色',
                sort: null,
                type: 3,
                parentId: 25,
                permission: 'system:role:delete'
              },
              {
                id: 28,
                url: null,
                name: '修改角色',
                sort: null,
                type: 3,
                parentId: 25,
                permission: 'system:role:update'
              },
              {
                id: 29,
                url: null,
                name: '查询角色',
                sort: null,
                type: 3,
                parentId: 25,
                permission: 'system:role:query'
              }
            ],
            parentId: 1
          }
        ]
      },
      {
        id: 9,
        name: '商品中心',
        type: 1,
        url: '/main/product',
        icon: 'el-icon-goods',
        sort: 3,
        children: [
          {
            id: 15,
            url: '/main/product/category',
            name: '商品类别',
            sort: 104,
            type: 2,
            children: [
              {
                id: 30,
                url: null,
                name: '创建类别',
                sort: null,
                type: 3,
                parentId: 15,
                permission: 'system:category:create'
              },
              {
                id: 31,
                url: null,
                name: '删除类别',
                sort: null,
                type: 3,
                parentId: 15,
                permission: 'system:category:delete'
              },
              {
                id: 32,
                url: null,
                name: '修改类别',
                sort: null,
                type: 3,
                parentId: 15,
                permission: 'system:category:update'
              },
              {
                id: 33,
                url: null,
                name: '查询类别',
                sort: null,
                type: 3,
                parentId: 15,
                permission: 'system:category:query'
              }
            ],
            parentId: 9
          },
          {
            id: 16,
            url: '/main/product/goods',
            name: '商品信息',
            sort: 105,
            type: 2,
            children: [
              {
                id: 34,
                url: null,
                name: '创建商品',
                sort: null,
                type: 3,
                parentId: 16,
                permission: 'system:goods:create'
              },
              {
                id: 35,
                url: null,
                name: '删除商品',
                sort: null,
                type: 3,
                parentId: 16,
                permission: 'system:goods:delete'
              },
              {
                id: 36,
                url: null,
                name: '修改商品',
                sort: null,
                type: 3,
                parentId: 16,
                permission: 'system:goods:update'
              },
              {
                id: 37,
                url: null,
                name: '查询商品',
                sort: null,
                type: 3,
                parentId: 16,
                permission: 'system:goods:query'
              }
            ],
            parentId: 9
          }
        ]
      },
      {
        id: 41,
        name: '随便聊聊',
        type: 1,
        url: '/main/story',
        icon: 'el-icon-chat-line-round',
        sort: 4,
        children: [
          {
            id: 42,
            url: '/main/story/chat',
            name: '你的故事',
            sort: 108,
            type: 2,
            children: null,
            parentId: 41
          },
          {
            id: 43,
            url: '/main/story/list',
            name: '故事列表',
            sort: 109,
            type: 2,
            children: [
              {
                id: 10,
                url: null,
                name: '删除故事',
                sort: null,
                type: 3,
                createAt: '2021-01-03 13:41:01.000000',
                parentId: 43,
                updateAt: '2021-04-19 21:59:44.000000',
                permission: 'system:story:delete'
              },
              {
                id: 11,
                url: null,
                name: '修改故事',
                sort: null,
                type: 3,
                createAt: '2021-01-03 13:41:01.000000',
                parentId: 43,
                updateAt: '2021-04-19 21:59:47.000000',
                permission: 'system:story:update'
              },
              {
                id: 12,
                url: null,
                name: '查询故事',
                sort: null,
                type: 3,
                createAt: '2021-01-03 13:41:01.000000',
                parentId: 43,
                updateAt: '2021-04-19 21:59:49.000000',
                permission: 'system:story:query'
              }
            ],
            parentId: 41
          }
        ]
      }
    ]
  },
  {
    code: 0,
    data: [
      {
        id: 38,
        name: '系统总览',
        type: 1,
        url: '/main/analysis',
        icon: 'el-icon-monitor',
        sort: 1,
        children: [
          {
            id: 39,
            url: '/main/analysis/overview',
            name: '核心技术',
            sort: 106,
            type: 2,
            children: null,
            parentId: 38
          },
          {
            id: 40,
            url: '/main/analysis/dashboard',
            name: '商品统计',
            sort: 107,
            type: 2,
            children: null,
            parentId: 38
          }
        ]
      },
      {
        id: 1,
        name: '系统管理',
        type: 1,
        url: '/main/system',
        icon: 'el-icon-setting',
        sort: 2,
        children: [
          {
            id: 2,
            url: '/main/system/user',
            name: '用户管理',
            sort: 100,
            type: 2,
            children: [
              {
                id: 5,
                url: null,
                name: '创建用户',
                sort: null,
                type: 3,
                parentId: 2,
                permission: 'system:users:create'
              },
              {
                id: 6,
                url: null,
                name: '删除用户',
                sort: null,
                type: 3,
                parentId: 2,
                permission: 'system:users:delete'
              },
              {
                id: 7,
                url: null,
                name: '修改用户',
                sort: null,
                type: 3,
                parentId: 2,
                permission: 'system:users:update'
              },
              {
                id: 8,
                url: null,
                name: '查询用户',
                sort: null,
                type: 3,
                parentId: 2,
                permission: 'system:users:query'
              }
            ],
            parentId: 1
          },
          {
            id: 3,
            url: '/main/system/department',
            name: '部门管理',
            sort: 101,
            type: 2,
            children: [
              {
                id: 19,
                url: null,
                name: '修改部门',
                sort: null,
                type: 3,
                parentId: 3,
                permission: 'system:department:update'
              },
              {
                id: 20,
                url: null,
                name: '查询部门',
                sort: null,
                type: 3,
                parentId: 3,
                permission: 'system:department:query'
              }
            ],
            parentId: 1
          },
          {
            id: 4,
            url: '/main/system/menu',
            name: '菜单管理',
            sort: 103,
            type: 2,
            children: [
              {
                id: 21,
                url: null,
                name: '创建菜单',
                sort: null,
                type: 3,
                parentId: 4,
                permission: 'system:menu:create'
              },
              {
                id: 23,
                url: null,
                name: '修改菜单',
                sort: null,
                type: 3,
                parentId: 4,
                permission: 'system:menu:update'
              },
              {
                id: 24,
                url: null,
                name: '查询菜单',
                sort: null,
                type: 3,
                parentId: 4,
                permission: 'system:menu:query'
              }
            ],
            parentId: 1
          },
          {
            id: 25,
            url: '/main/system/role',
            name: '角色管理',
            sort: 102,
            type: 2,
            children: [
              {
                id: 29,
                url: null,
                name: '查询角色',
                sort: null,
                type: 3,
                parentId: 25,
                permission: 'system:role:query'
              }
            ],
            parentId: 1
          }
        ]
      }
    ]
  }
]
