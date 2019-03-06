/*
This file is part of PG Yolanda-Haiyan

Copyright (c) 2013 National Mapping and Resource Information Authority

Yolanda-Haiyan is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Yolanda-Haiyan is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Yolanda-Haiyan.  If not, see <http://www.gnu.org/licenses/>.
*/
Ext.define('LoadedLayerContextMenu', {
    alias: 'widget.loadedlayer_contextmenu',
    extend: 'Ext.menu.Menu',
	items: [
			{
				text        : '0%&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Opacity&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;100%',
				canActivate : false,
				hideOnClick : true,
				shadow: true,
				style       : {
						marginTop  : '-5px',
						fontSize   : '9px'
					}
			},
			Ext.create('Ext.slider.Single', {
				width: 200,
				value: 50,
				increment: 10,
				minValue: 0,
				maxValue: 100
				/* listeners : {
								change : function(slider,newVal) {
									//var node = loaded_layer.getSelectionModel().getSelectedNode();
									//node.layer.setOpacity(newVal/100);
								}
							} */
			})
			
			
	],
    initComponent: function() {
        this.callParent(arguments);
		
		
		
		
    }
});



