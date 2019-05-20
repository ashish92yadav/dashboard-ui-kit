import * as React from 'react'
import { Link } from 'react-router-dom'
import { NavSection, NavPanel, NavSectionTitle, NavLink } from '@duik/it'
import { DocsContentPage, ExampleTable, ImportPath, PageContent } from '../../components'

import PropTable from './PropTable'


export const ReactDocsNavSectionTitle = () => {

  return (
    <DocsContentPage>
      <PageContent data={[
        { id: 'example', label: 'Example usage' },
        { id: 'props', label: 'Prop Table' },
      ]} />
      <h1>NavSectionTitle</h1>
      <ImportPath name="NavSectionTitle" />

      <p>
        Styled typo for section name in the NavPanel. Don't miss full example of how to build a navigation with nav elements <Link to="docs/react/navigation-panel">here</Link>.
      </p>

      <h2 id="example">Example</h2>
      <ExampleTable data={[
        {
          content: (
            <NavPanel dark>
              <NavSection>
                <NavSectionTitle>Section title 1</NavSectionTitle>
                <NavLink>Item 1</NavLink>
                <NavLink>Item 2</NavLink>
              </NavSection>
              <NavSection>
                <NavSectionTitle>Section title 2</NavSectionTitle>
                <NavLink>Item 1</NavLink>
                <NavLink>Item 2</NavLink>
              </NavSection>
            </NavPanel>
          )
        },]}
      />
      <PropTable />
    </DocsContentPage>
  )
}

export default ReactDocsNavSectionTitle;