function submitform(){
  // This how you would change the ending url document.myform.action = "http://quickstats.nass.usda.gov/results/"
  document.entry_census.submit();
}

var filters=new Object;
var filters2=new Object;
var filtersBack=new Object;
var request= new Object;


 request={};

var selections= new Object;

  filters={"group_desc":{"visible":true,"index":false,"selectedItems":[],"name":"group_desc","sortOrder":"asc","label":"Group","busy":false},"agg_level_desc":{"visible":true,"name":"agg_level_desc","children":{"watershed_desc":{"visible":false,"name":"watershed_desc","children":false,"index":false,"selectedItems":[],"label":"Watershed","sortOrder":"asc","busy":false},"state_name":{"visible":false,"name":"state_name","children":{"asd_desc":{"visible":false,"name":"asd_desc","children":false,"index":false,"selectedItems":[],"label":"Ag. District","sortOrder":"asc","busy":false},"zip_5":{"visible":false,"name":"zip_5","children":false,"index":false,"selectedItems":[],"label":"Zip Code","sortOrder":"asc","busy":false},"county_name":{"visible":false,"name":"county_name","children":false,"index":false,"selectedItems":[],"label":"County","sortOrder":"asc","busy":false}},"index":false,"selectedItems":[],"label":"State","sortOrder":"asc","busy":false},"region_desc":{"visible":false,"name":"region_desc","children":false,"index":false,"selectedItems":[],"label":"Region","sortOrder":"asc","busy":false}},"index":false,"selectedItems":[],"label":"Locale","sortOrder":"asc","busy":false},"commodity_desc":{"visible":true,"name":"commodity_desc","children":{"statisticcat_desc":{"visible":false,"name":"statisticcat_desc","children":false,"index":false,"selectedItems":[],"label":"Category","sortOrder":"asc","busy":false},"short_desc":{"visible":false,"name":"short_desc","children":{"domain_desc":{"visible":false,"name":"domain_desc","children":false,"index":false,"selectedItems":[],"label":"Domain","sortOrder":"asc","busy":false}},"index":false,"selectedItems":[],"label":"Data Item","sortOrder":"asc","busy":false}},"index":false,"selectedItems":[],"label":"Commodity","sortOrder":"asc","busy":false},"sector_desc":{"visible":true,"index":false,"selectedItems":[],"name":"sector_desc","sortOrder":"asc","label":"Sector","busy":false},"source_desc":{"visible":true,"index":false,"selectedItems":[],"name":"source_desc","sortOrder":"asc","label":"Program","busy":false},"year":{"visible":true,"name":"year","children":{"freq_desc":{"visible":false,"name":"freq_desc","children":{"reference_period_desc":{"visible":false,"name":"reference_period_desc","children":false,"index":false,"selectedItems":[],"label":"Reference Period","sortOrder":"asc","busy":false}},"index":false,"selectedItems":[],"label":"Frequency","sortOrder":"asc","busy":false}},"index":false,"selectedItems":[],"label":"Year","sortOrder":"desc","busy":false}};

function test() {
    document.getElementById("test").innerHTML = "hi";
}

function onSubmit() {
    var trends = document.getElementById('source_desc'), trend, i;

     for(i = 0; i < trends.length; i++) {
       trend = trends[i];
       if (trend.selected) {
           selections.push(trend);
       }
     }

      var trends = document.getElementById('sector_desc'), trend, i;

     for(i = 0; i < trends.length; i++) {
       trend = trends[i];
       if (trend.selected) {
           selections.push(trend);
       }
     }

      var trends = document.getElementById('commodity_desc'), trend, i;

     for(i = 0; i < trends.length; i++) {
       trend = trends[i];
       if (trend.selected) {
           selections.push(trend);
       }
     }

      var trends = document.getElementById('short_desc'), trend, i;

     for(i = 0; i < trends.length; i++) {
       trend = trends[i];
       if (trend.selected) {
           selections.push(trend);
       }
     }

      var trends = document.getElementById('domain_desc'), trend, i;

     for(i = 0; i < trends.length; i++) {
       trend = trends[i];
       if (trend.selected) {
           selections.push(trend);
       }
     }

      var trends = document.getElementById('agg_level_desc'), trend, i;

     for(i = 0; i < trends.length; i++) {
       trend = trends[i];
       if (trend.selected) {
           selections.push(trend);
       }
     }

      var trends = document.getElementById('state_name'), trend, i;

     for(i = 0; i < trends.length; i++) {
       trend = trends[i];
       if (trend.selected) {
           selections.push(trend);
       }
     }

      var trends = document.getElementById('asd_desc'), trend, i;

     for(i = 0; i < trends.length; i++) {
       trend = trends[i];
       if (trend.selected) {
           selections.push(trend);
       }
     }

      var trends = document.getElementById('county_name'), trend, i;

     for(i = 0; i < trends.length; i++) {
       trend = trends[i];
       if (trend.selected) {
           selections.push(trend);
       }
     }

      var trends = document.getElementById('zip_5'), trend, i;

     for(i = 0; i < trends.length; i++) {
       trend = trends[i];
       if (trend.selected) {
           selections.push(trend);
       }
     }

      var trends = document.getElementById('region_desc'), trend, i;

     for(i = 0; i < trends.length; i++) {
       trend = trends[i];
       if (trend.selected) {
           selections.push(trend);
       }
     }

      var trends = document.getElementById('watershed_desc'), trend, i;

     for(i = 0; i < trends.length; i++) {
       trend = trends[i];
       if (trend.selected) {
           selections.push(trend);
       }
     }

      var trends = document.getElementById('year'), trend, i;

     for(i = 0; i < trends.length; i++) {
       trend = trends[i];
       if (trend.selected) {
           selections.push(trend);
       }
     }

      var trends = document.getElementById('freq_desc'), trend, i;

     for(i = 0; i < trends.length; i++) {
       trend = trends[i];
       if (trend.selected) {
           selections.push(trend);
       }
     }

      var trends = document.getElementById('reference_period_desc'), trend, i;

     for(i = 0; i < trends.length; i++) {
       trend = trends[i];
       if (trend.selected) {
           selections.push(trend);
       }
     }


}


function dojoInit() {
    if ((screen.width<=800) && (screen.height<=600)) {
      window.location.replace('http://quickstats.nass.usda.gov/mobile');
    }

    var url=parent.location.hash;
    //var href = parent.location.href.split("?");

    if (url != ''){
        url=url.replace('#','');
        //dojo.xhrGet( {
        dojo.xhrPost( {
            url: '/uuid/decode/'+url,
            form: "entry_census",
            timeout: 500000,
            handleAs: "json",
            load: function(response,ioArgs){
                request=response;
                restoreFilter();
                initInputs();
            },
            error: loadError
         } );
    }
    else {
        var du = new Array();
        var u = 0;
        for( property in request) {
          //if( !(property.match(/long_desc/gi)) &&  !(property.match(/source_desc/gi)) ) {
          if( !(property.match(/long_desc/gi)) &&  !(property.match(/source_type/gi)) ) {
              du[u] = property;
              u++;
          }
        }
        request.breadcrumb = dojo.clone(du);
        restoreFilter();
        initInputs();
    }

    new dijit.Tooltip({
               id:"getDataTooltip",
               connectId: ["submit001"],
               position:"above",
               label:""
         });

    new dijit.Tooltip({
               id:"searchTooltip",
               connectId: ["search"],
               position:"above",
               label:"Search will limit selection lists based on the search phrase."
         });

}

dojo.addOnLoad(dojoInit);

function setVisibility(id, visibility) {
    document.getElementById(id).style.display = visibility;
}

function restoreFilter() {
  var breadcrumbs = new Array;
  breadcrumbs = request.breadcrumb;

  for (var param in request){
      var hide = 1;
  	  var filterNodes = getFilters(filters);
  	  for( var filter in filterNodes){
		if (filterNodes[filter].name == param || param == 'breadcrumb') {
		  hide=0;
        }
      }
      if(hide == 1) {
		  var hiddenParam=document.createElement('input');
		  hiddenParam.type='hidden';
		  hiddenParam.name=param;
		  hiddenParam.value=request[param];
		  document.entry_census.appendChild(hiddenParam);
		}
   }

   var ii=1;
   for(crumb in breadcrumbs){
		  var filter=getFilter(breadcrumbs[crumb],filters);
		  filter.index=ii;
		  filter.selectedItems=request[breadcrumbs[crumb]];
		  ii++;
   }

   breadcrumb();

   return 1;
}

function saveFilters() {
	var  filtersJSON=dojo.toJson(filters);
	var date = new Date();
	var days = 1;
	date.setTime(date.getTime()+(days*24*60*60*1000));
	var expires = "; expires="+date.toGMTString();
	document.cookie="filters="+filtersJSON+expires+"; path=/";
	return 1;
}

function initInputs() {
  var max=getMaxIndex(filters); //
  if(max > 1 ) {
    for(var filter in filters) {
      rebuildOption(filters[filter].name,filters);
    }
  }
}

//--called by clear button
function goCommHome(){
   document.location.replace("http://quickstats.nass.usda.gov/by_commodity/");
}
//--called by clear button
function goHome(){
  this.location.replace("http://quickstats.nass.usda.gov/");
}

//--set flag on when select menu changed
var sFlag = 0;
var timerId = 0;
var tmpObj={};

function call_updateInputs(){
  if(sFlag == 1){
	  sFlag = 0;
	  updateInputs(tmpObj);
	  //tmpObj=null;
      //if ( ! getPage("by_commodity") ) {
      //   //call displayRowCounts
      //}
  }
}

function setFlag(selectedInput){
   tmpObj = selectedInput;
   if(timerId != 0){
	  clearTimeout(timerId);
   }
   timerId = setTimeout(call_updateInputs, 5000); // 5 sec
   sFlag = 1;
}

function updateFlag(){
  sFlag = 1;
  return;
}

//-- opera, firefox, safari, msie,chrome
function isIt(browserName){
  var browser = navigator.userAgent.toLowerCase();
  return browser.indexOf(browserName);
}

//-- call updateInputs on mouseout event
function callUpdateInputOnMouseOut(e,selectInput){
  if (!e) var e = window.event;
  var elmTarg='';
  var rt = 0;
  var elmTargId='';
  var runUpdate=0;

  if(e.type=="mouseout"){
      if((rt = isIt("msie")) > 0 ) {
          //elmTarg = e.toElement.tagName;
          //elmTargId =  e.toElement.id;
		  runUpdate=1;
      }
      //else if((rt = isIt("chrome") > 0 )) {
      //    elmTarg = e.srcElement.tagName;
      //}
      else {
          elmTarg = e.relatedTarget.tagName;
          elmTargId = e.relatedTarget.id;
		  //if(elmTarg == "SELECT" || elmTarg =="DIV"){
		  if(elmTarg =="DIV"){
		     runUpdate = 1;
		  } else {
             runUpdate = 0;
		  }
      }

      if(runUpdate==1) {
          clearTimeout(timerId);
          if(sFlag == 1) {
               sFlag = 0;
               updateInputs(selectInput);
               //if ( ! getPage("by_commodity") ) {
               //   ;
               //}
          }
      }
   }
}

function updateInputs(currentInput) {
    setFilter(currentInput.name);
    createOptions();
}


function isActive(inputName) {
  filter=getFilter(inputName,filters);
  if(filter==false ||  filter.index==false) {
    return false;
  }else {
    return true;
  }
}


function setFilter(inputName) {
  var filterObject=new Object;
  var index;

  if(isActive(inputName)) {
    deactivateComponents(inputName);
    index=getFilter(inputName,filters).index;
  } else {
    index=getMaxIndex(filters);
  }

  filter=getFilter(inputName,filters);
  element=dojo.byId(inputName);
  filter.selectedItems=new Array;

  var jj=0;
  for(var ii=0; ii < element.options.length;ii++) {
    if(element.options[ii].selected && element.options[ii].type!='hidden') {
      filter.selectedItems[jj]=element.options[ii].value;
      jj++;
    }
  }

  filter.index=index;
  breadcrumb();
}

function breadcrumb() {
  var elements=document.entry_census.elements;
  for(var ii=0; ii < elements.length; ii++) {
    if(elements[ii].name=='breadcrumb' && elements[ii].parentNode && elements[ii].parentNode.removeChild) {
       var test=elements[ii].value;
       elements[ii].parentNode.removeChild(elements[ii]);
       ii--;
    }
  }

  var breadcrumbs = new Array;
  var labels = new Array;
  var filterNodes=getFilters(filters);
  for(var filterNode in filterNodes) {
    if(filterNodes[filterNode].index) {
      var index=filterNodes[filterNode].index;
      index=index-1;
      breadcrumbs[index]=filterNodes[filterNode].name;
      labels[index]=filterNodes[filterNode].label;
    }
  }
  removeFromNavHistory();

  for( var bb=0; bb < breadcrumbs.length ; bb++ ) {
    var breadcrumb=document.createElement('input');
    breadcrumb.type='hidden';
    breadcrumb.name='breadcrumb';
    breadcrumb.value=breadcrumbs[bb];
    var label=labels[bb];
    document.entry_census.appendChild(breadcrumb);
    addToNavHistoryDiv(label,breadcrumbs[bb]);
  }

  displayRowCounts(); //just need to call it here...
}


function deactivateComponents(inputName) {
  var filter=getFilter(inputName,filters);
  var currentIndex=filter.index;
  var filterArray=getFilters(filters);
  for(var ii=0; ii < filterArray.length; ii++) {
    if(filterArray[ii].index > currentIndex) {
	   filterArray[ii].index=false;
	   filterArray[ii].selectedItems = new Array;
	   element = dojo.byId(filterArray[ii].name);
	   for(var jj=0; jj < element.options.length;jj++) {
		  element.options[jj].selected=false;
	   }
    } else if (filterArray[ii].index == currentIndex ) {
      var newIndex=false;
      var element=dojo.byId(inputName);
      for(var jj=0; jj < element.options.length;jj++) {
	     if(element.options[jj].selected) {
			 newIndex=currentIndex;
	     }
      }
      filterArray[ii].index=newIndex;
    }
  }
}

function getMaxIndex(filter) {
  var maxIndex=1;
  var filterNodes=getFilters(filter);

  for(var filter in filterNodes) {
    if(filterNodes[filter].index >= maxIndex) {
      maxIndex = filterNodes[filter].index+1;
    }
  }
  return maxIndex;
}

function createOptions() {
  var filterNodes=getFilters(filters);
  ///var element;

  //disable non active menus
  for(var filter in filterNodes) {
    if(filterNodes[filter].index == false) {
       disableInput(filterNodes[filter].name);
    }
  }
  for(var filter in filters) {
    ///element=dojo.byId(filters[filter].name);
    createOption(filter);
  }
}

function disableInput(inputName) {
  var element=dojo.byId(inputName);
  element.disabled=true;
}

function enableInput(inputName) {
  var element = dojo.byId(inputName);
  element.disabled = false;
}

function enableInputs() {
  var filterNodes = getFilters(filters);

  for( var filter in filterNodes) {
    enableInput(filterNodes[filter].name);
  }
}

function getSelectedItems(inputName) {
  return filters[inputName].selectedItems;
}

function rebuildOption(inputName,filter) {
  var filterNode  = getFilter(inputName,filter);
  var order       = filterNode.sortOrder;
  var params      = new Object;
  var nodeIndex   = filterNode.index;

  startSpinDiv(filterNode.name); //need?back
  filterNode.busy = true;

  if(nodeIndex == false) {
		nodeIndex = getMaxIndex(filter);
  }

  var myForm=document.entry_census;
  for(var ii = 0; ii < myForm.elements.length; ii++) {
		myElement=myForm.elements[ii];
		params[myElement.name]=new Array;
  }

  for(var ii = 0; ii < myForm.elements.length; ii++) {
    myElement = myForm.elements[ii];
    //console.debug('MY ELEMNETN NAME: '+myElement.name+' TYPE: '+myElement.type+' VALUE: '+myElement.value);
    if(myElement.type=='hidden') {
      if(params[myElement.name] ) {
		params[myElement.name].push(myElement.value);
      } else {
		params[myElement.name].push(myElement.value);
      }
    }
  }

  for(var ii=1; ii < nodeIndex; ii++) {
		paramFilter=getFilterByIndex(ii,filter);
		params[paramFilter.name]=paramFilter.selectedItems;
		//for(var tt=0;  tt< params[paramFilter.name].length; tt++){
            //console.debug('parmaFilter: '+paramFilter.name+' params Items' + params[paramFilter.name][tt]);
        //}
  }

  var OBJ = {
			url: "/get_constraints/"+inputName+"/"+order,
			handleAs: "json",
			content: params,
			sync: false,
			load: function(data,ioArgs) {
			  rebuildOptionCallBack(inputName,filter,data);
			},
			error: function(data,ioArgs) {
			  return data;
			}
  }
  dojo.xhrPost(OBJ);

}

function select_all(inputName) {
  select=dojo.byId(inputName);
  for(var ii=0; ii < select.options.length; ii++) {
    select.options[ii].selected=true;
  }
  updateInputs(select);
}

function select_past_n(inputName,past_n) {
  select=dojo.byId(inputName);
  for(var ii=0; ii < past_n; ii++) {
    select.options[ii].selected=true;
  }
  updateInputs(select);
}

function clear_all(inputName) {
  select=dojo.byId(inputName);
  for(var ii=0; ii < select.options.length; ii++) {
    select.options[ii].selected=false;
  }
  updateInputs(select);
}

function rebuildOptionCallBack(inputName,filter,data) {
  var filterNode=getFilter(inputName,filter);
  //  console.debug("CreatOptionCallBack "+filterNode.busy+" name "+filter.name);
  var selectedItems=filterNode.selectedItems;
  //console.debug("filterNode: "+filterNode.name+"index:" +filterNode.index +" data.length "+ data.length);

  if (data.length>0 ){
    filterNode.selectedItems=[];
    select=dojo.byId(inputName);
    select.length=0;
    var jj=0;
    for (var h=0; h < data.length; h++) {
      if(data[h][1] != null) {
        var option=document.createElement("option");
        option.appendChild(document.createTextNode(data[h][0]));
        option.value=data[h][1];
        for(var ii=0; ii < selectedItems.length; ii++) {
          if(option.value==selectedItems[ii]) {
            option.selected=true;
            filterNode.selectedItems[jj]=data[h][1];
            jj++;
          }
        }
        select.appendChild(option);
      }
    }
    var element=dojo.byId(inputName);
    //console.debug("CHILDDIV: "+ element.options.length);
    if(element.options.length == 0) {
      hideDiv(inputName);
    } else if(element.options.length == 1 && element.options[0].value=='') {
      hideDiv(inputName);
    } else {
      showDiv(inputName);
    }

  }

  filterNode.busy=false;

  showOptions();

  if(filterNode.children && filterNode.selectedItems.length > 0 ) {
    for(var child in filterNode.children) {
      // console.debug("PostAjax child"+filterNode.child+" selectedItems.length "+filterNode.selectedItems.length);
      var childFilter=getFilter(child,filter);
      childFilter.visible=true;
      enableInput(inputName); // necessary to build children.
      rebuildOption(childFilter.name,filter);
      //console.debug("do we call "+childFilter+" creatOption("+childFilter.name+")?  if(( "+childFilter.index+" == false && "+childFilter.visible+"==true) || "+childFilter.index+"+1==getMaxIndex(filter) ) {");
    }
  } else if (filterNode.children && filterNode.selectedItems.length==0 ) {
    for(var child in filterNode.children) {
      var childFilter=getFilter(child,filter);
      childFilter.visible=false;
      hideDiv(childFilter.name);
    }
  }

}

var rethrowCreateOption=0;//ugly hack - mj

function createOption(inputName){
  var filter=getFilter(inputName,filters);
  var order=filter.sortOrder;
  var div=dojo.byId(inputName+'_div');

  startSpinDiv(filter.name);
  filter.busy=true;

  if((filter.index == false && filter.visible==true) || filter.index+1==getMaxIndex(filters) ) {
	var OBJ=
      {
		url: "/get_constraints/"+inputName+"/"+order,
		handleAs: "json",
		form: "entry_census",
		sync: false,
        load: function(data,ioArgs) {
             if(data.length <= 0) {
                 hideDiv(inputName); //ugly hack - dp
             }
		     createOptionCallBack(inputName,data);
		},
		error: function(data,ioArgs)
		{
              rethrowCreateOption++;
              if(rethrowCreateOption < 9) {
                    createOption(inputName);
                    return;
              } else {
                    alert("can not determine available options: "+inputName);
                    createOptionCallBack(inputName,data);
              }
		}
      }

    dojo.xhrPost(OBJ);

  } else {
        data = new Array;
        createOptionCallBack(inputName,data);
  }
}


function createOptionCallBack(inputName,data) {
  var filter = getFilter(inputName,filters);
  var selectedItems = filter.selectedItems;

  if(data.length > 0 && filter.index == false) {
    filter.selectedItems=[];
    select = dojo.byId(inputName);
    select.length = 0;
    var jj = 0;

    for (var h = 0; h < data.length; h++) {
      var option=document.createElement("option");
      if(data[h][1] != null) {
		option.appendChild(document.createTextNode(data[h][0]));
		option.value=data[h][1];
		for(var ii = 0; ii < selectedItems.length; ii++) {
		  if(option.value == selectedItems[ii]) {
			option.selected = true;
			filter.selectedItems[jj] = data[h][1];
			jj++;
		  }
		}
		select.appendChild(option);
      }
    }

    var element=dojo.byId(inputName);

	if(element.options.length == 0) {
      hideDiv(inputName);
    } else if(element.options.length == 1 && (element.options[0].value=='' || element.options[0].value=='null' )) {
	  hideDiv(inputName);
    } else {
      showDiv(inputName);
    }
  }

  filter.busy=false;

  showOptions();

  if(filter.children && filter.selectedItems.length > 0 ) {
    for(var child in filter.children) {
      var childFilter=getFilter(child,filters);
      childFilter.visible=true;
      enableInput(inputName); // necessary to build children.
      createOption(childFilter.name);
    }
  } else if(filter.children && filter.selectedItems.length==0 ) {
    for(var child in filter.children) {
      var childFilter = getFilter(child,filters);
      childFilter.visible=false;
      hideDiv(childFilter.name);

      if(childFilter.children){
         for( var grandchild in childFilter.children) {
		     var grandchildFilter = getFilter(grandchild, filters);
			 hideDiv(grandchildFilter.name)
		 }
	  }
    }
  }

  ////displayRowCounts(); // it was already called in showOptions()

  return 1;
}

function showOptions() {
  filterArray=getFilters(filters);
  var enableFlag=1;

  for(var ii=0;ii< filterArray.length; ii++) {
    var filterNode=filterArray[ii];
    //console.debug("filterNode: "+filterNode+"busy? "+filterNode.busy+" name "+filterNode.name);
    if(filterNode.busy) {
      enableFlag=0;
    }
  }
  if(enableFlag) {
    for(var ii=0;ii< filterArray.length; ii++) {
      var filterNode=filterArray[ii];
      //console.debug("visble? "+filterNode.busy+" name "+filterNode.name);
      //if(filterNode.visible) {
      enableInput(filterNode.name);
      stopSpinDiv(filterNode.name);
    }

    displayRowCounts();
  }
}


function startSpinDiv(name) {
      var div=dojo.byId(name);
      var spin=dojo.byId(name+'_spinner');

     // dojo.fx.chain([
      //dojo.fx.combine([
//		       dojo.fadeOut({node:div.id, delay:100,duration:500,onEnd:function(){spin.style.display='';} }),
//		       dojo.fadeIn({node:spin.id, delay:100,duration:500})
//		       ]).play();
}


function hideSpinner(divId) {
//  var div=dojo.byId(divId);
//      dojo.fadeOut({node:div.id, delay:100, duration:500, onEnd: function(){div.style.display='none';}
//		   }).play();
}


function showSpinner(divId) {
 // var div=dojo.byId(divId);
 //     div.style.display='';
 //     dojo.fadeIn({node:div.id, delay:100, duration:500,
 //                  onEnd: function(){
 //                                     // div.style.visibility=true;
 //                                 }
 //    	          }).play();
}


function stopSpinDiv(name) {
//  var div=dojo.byId(name);
//  var spin=dojo.byId(name+'_spinner');
//   dojo.fx.combine([
//		    dojo.fadeOut({node:spin.id, delay:100,duration:500,onEnd:function() {spin.style.display='none';} }),
//		    dojo.fadeIn({node:div.id, delay:100,duration:500})
//		    ]).play();
}


function showDiv(name) {
  var div=dojo.byId(name+'_div');

  div.style.display='';
  dojo.fadeIn({node:div.id, delay:100, duration:1000, onEnd: function(){div.style.display='';}
    	          }).play();
}


function hideDiv(name) {
  var div=dojo.byId(name+'_div');

  dojo.fadeOut({ node:div.id, delay:300, duration:2000, onEnd:function(){div.style.display='none';}
		       }).play();
}


function spinner(state){
  var dv=document.getElementById('spinner');
  if (state=='show'){
    dv.style.visibility="visible";
  }else{
    dv.style.visibility="hidden";
  }
}


function getFilter(inputName,filterNode){
  for(filter in filterNode) {
    if(filter == inputName) {
      //alert("found filter returning "+ filterNode[filter] + "..." + inputName);
      return filterNode[filter];
    } else if (filterNode[filter].children) {
		filter=getFilter(inputName,filterNode[filter].children);
		if(filter==false) {
	      //next node;
		} else {
		   return filter;
		}
    }
  }
  return false;
}


function getFilters(filterNode){
  var filterArray=new Array;
  var jj=0;
  for(filter in filterNode) {
    filterArray.push(filterNode[filter]);
    if(filterNode[filter].children != false) {

      childArray=getFilters(filterNode[filter].children);
      for(var ii=0; ii < childArray.length; ii++) {
	filterArray.push(childArray[ii]);
      }
    }
  }
  return filterArray;
}

function getFilterByIndex(index,filterNode) {

  for(filter in filterNode) {
    if(filterNode[filter].index == index) {
      return filterNode[filter];
    } else if (filterNode[filter].children) {
      filter=getFilterByIndex(index,filterNode[filter].children);
      if(filter==false) {
        //next node;
      } else {
        return filter;
      }
    }

  }
  return false;
}

function saveQuery(){
      alert(uuid);
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}


function loadSubmit(_uuid, ioArgs){
	parent.location.hash =_uuid;
	document.location.href ='/results/'+_uuid;
}

function loadError(response, ioArgs) {
	alert(response);
}

function onSubmit() {
     var rowcount;
     dojo.xhrPost( {
                      url: '/row_counts',
                      form: "entry_census",
                      timeout: 500000,
                      handleAs: "json",
                      load: function(response, ioArgs) {
                      ;
                       if (response.rowcnt <= 50000 ){
                         dojo.xhrPost( {
				             url: '/uuid/encode',
				             form: "entry_census",
				             timeout: 500000,
				             handleAs: "json",
				             load: loadSubmit,
				             error: loadError
				         } );
                       }
                     }
                 });
}


function addToNavHistoryDiv(field,name){
	var div = document.getElementById('NavHistoryDiv');
	var dvCount=div.getElementsByTagName("div").length;
	if (dojo.query("[name='nvName_"+field+"']").length > 0){
		return 1;
	}
	txtDiv = document.createElement('div');
	newlink = document.createElement('a');
 	tn = document.createTextNode(field);
 	newlink.appendChild(tn);
	var ndvCount=dvCount+1;
 	newlink.setAttribute('href', "javascript:updateInputs(dojo.byId('"+name+"'));");
	//newlink.setAttribute('href', "javascript:tester();");
 	arrow = document.createTextNode("->");

	txtDiv.setAttribute('id','nvTxt_'+dvCount);
	txtDiv.setAttribute('name','nvName_'+field);
    txtDiv.className='nav';
	if (dvCount != 0){
		txtDiv.appendChild(arrow);
	}
	txtDiv.appendChild(newlink);
	div.appendChild(txtDiv);

}

function removeFromNavHistory(){
	var navDiv=document.getElementById("NavHistoryDiv");
	while( navDiv.hasChildNodes() ) { navDiv.removeChild( navDiv.lastChild ); }

}


// Display row number on index page
function displayRowCounts() {

    dojo.xhrPost( {
				    url: "/row_counts",
				    form: "entry_census",
				    timeout: 500000,
				    handleAs: "json",
                    load: function(response, ioArgs) {
                          var rowcnt=addCommas(response.rowcnt);
                          var totalrowcnt=addCommas(response.totalrowcnt);
                          var stausColor;
                          var statusMsg;
                          var toolMsgTxt

                          if(response.rowcnt ==  response.totalrowcnt ) {
                          var statusMsg= rowcnt+' records.';
                            rowCntMsg="Select one or more items to filter records. There are currently "+totalrowcnt+" records available.";
                            statusColor='red';
                            toolMsgTxt= " Selected items filter to "+ rowcnt + " of " + totalrowcnt + " total records";
                          }else if( response.rowcnt > 50000 ){
                            statusColor='red';
                            statusMsg=rowcnt+' records';
                            toolMsgTxt=" Selected items filter to "+ rowcnt + " of " + totalrowcnt +". Only "+addCommas( 50000)+" records can be returned at a time.";
                            rowCntMsg=toolMsgTxt;
                           }else if(response.rowcnt == 0){
                            statusColor='red';
                            statusMsg=rowcnt+' records';
                            toolMsgTxt="  "+ rowcnt + " of " +totalrowcnt+" Please click Clear to reset.";
                            rowCntMsg=toolMsgTxt;
                          }else {
                           statusMsg= rowcnt+' records.';
                           statusColor='green';
                           toolMsgTxt= " Selected items filter to "+ rowcnt + " of " + totalrowcnt + " total records. Press Get Data button below to retrieve records.";
                           rowCntMsg=toolMsgTxt;
                          }
                          dijit.byId('getDataTooltip').attr('label',toolMsgTxt);
                          document.getElementById("rCounts").innerHTML=rowCntMsg;
                          document.getElementById("status_go").style.color=statusColor;
                          document.getElementById("status_go").innerHTML=statusMsg;

                    },

                    error: function(response, ioArgs) {
	                       return response;
	                }

				 } );

}


// return true if page is current url
function getPage(page) {
   var currentPage = location.href;
   var pattern=new RegExp(page,"gi");
   if(currentPage.match(pattern)) {
       return true;
   }
}


function submitSearch(){
  startSpinDiv('search_text');
  var thisForm=document.forms.search_form;

  dojo.xhrPost( {
                    url: '/uuid/encode',
                    form: "search_form",
                    sync: true,
                    timeout: 500000,
                    handleAs: "json",
                    load: function loadSearch(_uuid, ioArgs){
                      thisForm.action=document.location.href+_uuid;
                      //displayRowCounts() ; // why call it here again?
                    },

                    error: loadError
                 } );
}


function addCommas(nStr){
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}






//=====================================================
//============== debug/test ===========================
//=====================================================

function toggleHelp(helpDiv) {
var div=document.getElementById(helpDiv);
  if (div.style.display=='block'){
    div.style.display='none';
  }else {
    div.style.display='block';
  }
}