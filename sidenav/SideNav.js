// import React, { useCallback } from "react";

// const Home = () => {
//   // const navigate = useNavigate();
//   // const handleOnClickProject = useCallback(
//   //   () => navigate("/Projects", { replace: true }),
//   //   [navigate]
//   // );

//   return (

//     <div>
//     <div
//         style={{
//             marginLeft: expanded ? 240 : 64,
//             padding: '15px 20px 0 20px'
//         }}
//     >
//         <ButtonGroup>
//             <Button btnStyle="flat" onClick={this.navigate('home')}>
//                 Home
//             </Button>
//             <Button btnStyle="flat" onClick={this.navigate('devices')}>
//                 Devices
//             </Button>
//             <Button btnStyle="flat" onClick={this.navigate('reports')}>
//                 Reports
//             </Button>
//             <Dropdown>
//                 <Dropdown.Toggle>
//                     Settings
//                 </Dropdown.Toggle>
//                 <Dropdown.Menu>
//                     <MenuItem onClick={this.navigate('settings/policies')}>
//                         Policies
//                     </MenuItem>
//                     <MenuItem onClick={this.navigate('settings/network')}>
//                         Network
//                     </MenuItem>
//                 </Dropdown.Menu>
//             </Dropdown>
//         </ButtonGroup>
//     </div>
//     <SideNav onSelect={this.onSelect} onToggle={this.onToggle}>
//         <SideNav.Toggle />
//         <SideNav.Nav selected={selected}>
//             <NavItem eventKey="home">
//                 <NavIcon>
//                     <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em', verticalAlign: 'middle' }} />
//                 </NavIcon>
//                 <NavText style={{ paddingRight: 32 }} title="Home">
//                     Home
//                 </NavText>
//             </NavItem>
//             <NavItem eventKey="devices">
//                 <NavIcon>
//                     <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em', verticalAlign: 'middle' }} />
//                 </NavIcon>
//                 <NavText style={{ paddingRight: 32 }} title="Devices">
//                     Devices
//                 </NavText>
//             </NavItem>
//             <NavItem eventKey="reports">
//                 <NavIcon>
//                     <i className="fa fa-fw fa-list-alt" style={{ fontSize: '1.75em', verticalAlign: 'middle' }} />
//                 </NavIcon>
//                 <NavText style={{ paddingRight: 32 }} title="Reports">
//                     Reports
//                 </NavText>
//             </NavItem>
//             <NavItem eventKey="settings">
//                 <NavIcon>
//                     <i className="fa fa-fw fa-cogs" style={{ fontSize: '1.5em', verticalAlign: 'middle' }} />
//                 </NavIcon>
//                 <NavText style={{ paddingRight: 32 }} title="Settings">
//                     Settings
//                 </NavText>
//                 <NavItem eventKey="settings/policies">
//                     <NavText title="Policies">
//                         Policies
//                     </NavText>
//                 </NavItem>
//                 <NavItem eventKey="settings/network">
//                     <NavText title="Network">
//                         Network
//                     </NavText>
//                 </NavItem>
//             </NavItem>
//         </SideNav.Nav>
//     </SideNav>
//     <Main expanded={expanded}>
//         {this.renderBreadcrumbs()}
//     </Main>
// </div>
//   );
// };

// export default Home;
