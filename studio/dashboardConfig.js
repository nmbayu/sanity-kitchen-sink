export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6046dda2e0f2052337b52614',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-nmqxmsn4',
                  apiId: '64dd2572-6c13-4ece-9e78-2a473083b504'
                },
                {
                  buildHookId: '6046dda30492f62797ab5d9f',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-zwddnmxg',
                  apiId: '6c7b53fe-9f15-4378-93bd-bce392919d5a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nmbayu/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-zwddnmxg.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
