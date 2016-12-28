import React, {Component} from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Checkbox, Radio, Button, InputGroup } from 'react-bootstrap';

import axios from 'axios';

class Setup extends Component{
  render(){
		console.log(this.props.vagrant);
    return (
			    <div className="settings">
			      <form>
			          <h4><a name="Vagrant Settings">Vagrant Settings</a></h4>
								<p className="title-info">Choose the options for your virtual machine.</p>
			          <hr/>
								<FormGroup controlId="formControlsSelectMultiple">
			            <FormControl componentClass="select">
										<option value="select">Ubuntu</option>
			              <option value="other">Ubuntu Precise Pangolin (12.04) [LTS] 32</option>
										<option value="other">Ubuntu Precise Pangolin (12.04) [LTS] 64</option>
			            </FormControl>
			          </FormGroup>
			          <FieldGroup
			            id="formControlsHostName"
			            type="text"
			            label="Host Name"
			            placeholder="Host Name"
			          />
			          <FieldGroup
			            id="formControlsIPAddress"
			            label="IP Address"
			            type="text"
			            placeholder="IP Address"
			          />
								<FieldGroup
									id="formControlsMemory"
									label="Memory"
									type="text"
									placeholder="Memory"
								/>
								<FieldGroup
									id="formControlsSharedFolder"
									label="Shared Folder"
									type="text"
									placeholder="Shared Folder"
								/>
								<FormGroup>
									<InputGroup>
										<InputGroup.Addon>
											<input type="checkbox" aria-label="..." />
										</InputGroup.Addon>
										<FormControl type="text" placeholder="Use Vagrant Cloud" readOnly/>
									</InputGroup>
								</FormGroup>
								<FormGroup controlId="formControlsSelectMultiple">
									<FormControl componentClass="select">
										<option value="select">Synced Folder Types</option>
										<option value="other">NFS</option>
										<option value="other">RSync</option>
										<option value="other">SMB</option>
										<option value="other">VBox Default</option>
									</FormControl>
								</FormGroup>


			          <h4><a name="Server Packages">Server Packages</a></h4>
								<p className="title-info">Type the name of the package and choose from the list.</p>
			          <hr/>

								<FormGroup controlId="formControlsPackages">
									<FormControl componentClass="select">
										<option value="select">Packages</option>
										<option value="select">vm</option>
										<option value="other">git</option>
										<option value="other">fail2ban</option>
										<option value="other">htop</option>
										<option value="other">iotop</option>
										<option value="other">nodejs</option>
									</FormControl>
								</FormGroup>

								<h4><a name="Web Servers">Web Servers</a></h4>
								<p className="title-info">Choose the Web Server you want to use.</p>
								<hr/>

								<FormGroup>
									<InputGroup>
										<InputGroup.Addon>
											<input type="radio" name="webServer" value="nginx" aria-label="..." />
										</InputGroup.Addon>
										<FormControl type="text" placeholder="Install Nginx" readOnly/>
									</InputGroup>
								</FormGroup>
								<FormGroup>
									<InputGroup>
										<InputGroup.Addon>
											<input type="radio" name="webServer" value="apache" aria-label="..." />
										</InputGroup.Addon>
										<FormControl type="text" placeholder="Install Apache" readOnly/>
									</InputGroup>
								</FormGroup>

								<FieldGroup
									id="formControlsDocumentRoot"
									type="text"
									label="Document Root"
									placeholder="Document Root"
								/>

								<FieldGroup
									id="formControlsServerName"
									type="text"
									label="Server Name"
									placeholder="Server Name"
								/>

							<h4><a name="Languages">Languages</a></h4>
								<p className="title-info">Choose the Languages you want to use.</p>
								<hr/>

								<FormGroup>
									<InputGroup>
										<InputGroup.Addon>
											<input type="radio" name="language" value="php" aria-label="..." />
										</InputGroup.Addon>
										<FormControl type="text" placeholder="Install PHP" readOnly/>
									</InputGroup>
								</FormGroup>
								<FormGroup>
									<InputGroup>
										<InputGroup.Addon>
											<input type="radio" name="language" value="hhvm" aria-label="..." />
										</InputGroup.Addon>
										<FormControl type="text" placeholder="Install HHVM" readOnly/>
									</InputGroup>
								</FormGroup>

								<h4><a name="Timezone">Timezone</a></h4>
								<p className="title-info">Choose your timezone from the list.</p>
								<hr/>

									<FormGroup controlId="formControlsPackages">
										<FormControl componentClass="select">
											<option value="select">Timezone</option>
											<option value="select">UTC</option>
											<option value="other">Pacific/Saipan</option>
											<option value="other">Pacific/Tahiti</option>
										</FormControl>
									</FormGroup>

			          <Button className="btn btn-primary" type="submit">Generate</Button>
			        </form>
			    </div>
    );
  }
}
// const Setup = ({data}) => {
// 	return(
//     <div className="settings">
//       <form>
//           <h4><a name="Vagrant Settings">Vagrant Settings</a></h4>
// 					<p className="title-info">Choose the options for your virtual machine.</p>
//           <hr/>
// 					<FormGroup controlId="formControlsSelectMultiple">
//             <FormControl componentClass="select">
//               <option value="select">Ubuntu</option>
//               <option value="other">Ubuntu Precise Pangolin (12.04) [LTS] 32</option>
// 							<option value="other">Ubuntu Precise Pangolin (12.04) [LTS] 64</option>
//             </FormControl>
//           </FormGroup>
//           <FieldGroup
//             id="formControlsHostName"
//             type="text"
//             label="Host Name"
//             placeholder="Host Name"
//           />
//           <FieldGroup
//             id="formControlsIPAddress"
//             label="IP Address"
//             type="text"
//             placeholder="IP Address"
//           />
// 					<FieldGroup
// 						id="formControlsMemory"
// 						label="Memory"
// 						type="text"
// 						placeholder="Memory"
// 					/>
// 					<FieldGroup
// 						id="formControlsSharedFolder"
// 						label="Shared Folder"
// 						type="text"
// 						placeholder="Shared Folder"
// 					/>
// 					<FormGroup>
// 						<InputGroup>
// 							<InputGroup.Addon>
// 								<input type="checkbox" aria-label="..." />
// 							</InputGroup.Addon>
// 							<FormControl type="text" placeholder="Use Vagrant Cloud" readOnly/>
// 						</InputGroup>
// 					</FormGroup>
// 					<FormGroup controlId="formControlsSelectMultiple">
// 						<FormControl componentClass="select">
// 							<option value="select">Synced Folder Types</option>
// 							<option value="other">NFS</option>
// 							<option value="other">RSync</option>
// 							<option value="other">SMB</option>
// 							<option value="other">VBox Default</option>
// 						</FormControl>
// 					</FormGroup>
//
//
//           <h4><a name="Server Packages">Server Packages</a></h4>
// 					<p className="title-info">Type the name of the package and choose from the list.</p>
//           <hr/>
//
// 					<FormGroup controlId="formControlsPackages">
// 						<FormControl componentClass="select">
// 							<option value="select">Packages</option>
// 							<option value="select">vm</option>
// 							<option value="other">git</option>
// 							<option value="other">fail2ban</option>
// 							<option value="other">htop</option>
// 							<option value="other">iotop</option>
// 							<option value="other">nodejs</option>
// 						</FormControl>
// 					</FormGroup>
//
// 					<h4><a name="Web Servers">Web Servers</a></h4>
// 					<p className="title-info">Choose the Web Server you want to use.</p>
// 					<hr/>
//
// 					<FormGroup>
// 						<InputGroup>
// 							<InputGroup.Addon>
// 								<input type="radio" name="webServer" value="nginx" aria-label="..." />
// 							</InputGroup.Addon>
// 							<FormControl type="text" placeholder="Install Nginx" readOnly/>
// 						</InputGroup>
// 					</FormGroup>
// 					<FormGroup>
// 						<InputGroup>
// 							<InputGroup.Addon>
// 								<input type="radio" name="webServer" value="apache" aria-label="..." />
// 							</InputGroup.Addon>
// 							<FormControl type="text" placeholder="Install Apache" readOnly/>
// 						</InputGroup>
// 					</FormGroup>
//
// 					<FieldGroup
// 						id="formControlsDocumentRoot"
// 						type="text"
// 						label="Document Root"
// 						placeholder="Document Root"
// 					/>
//
// 					<FieldGroup
// 						id="formControlsServerName"
// 						type="text"
// 						label="Server Name"
// 						placeholder="Server Name"
// 					/>
//
// 				<h4><a name="Languages">Languages</a></h4>
// 					<p className="title-info">Choose the Languages you want to use.</p>
// 					<hr/>
//
// 					<FormGroup>
// 						<InputGroup>
// 							<InputGroup.Addon>
// 								<input type="radio" name="language" value="php" aria-label="..." />
// 							</InputGroup.Addon>
// 							<FormControl type="text" placeholder="Install PHP" readOnly/>
// 						</InputGroup>
// 					</FormGroup>
// 					<FormGroup>
// 						<InputGroup>
// 							<InputGroup.Addon>
// 								<input type="radio" name="language" value="hhvm" aria-label="..." />
// 							</InputGroup.Addon>
// 							<FormControl type="text" placeholder="Install HHVM" readOnly/>
// 						</InputGroup>
// 					</FormGroup>
//
// 					<h4><a name="Timezone">Timezone</a></h4>
// 					<p className="title-info">Choose your timezone from the list.</p>
// 					<hr/>
//
// 						<FormGroup controlId="formControlsPackages">
// 							<FormControl componentClass="select">
// 								<option value="select">Timezone</option>
// 								<option value="select">UTC</option>
// 								<option value="other">Pacific/Saipan</option>
// 								<option value="other">Pacific/Tahiti</option>
// 							</FormControl>
// 						</FormGroup>
//
//           <Button className="btn btn-primary" type="submit">Generate</Button>
//         </form>
//     </div>
//   );
// };

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

export default Setup;
