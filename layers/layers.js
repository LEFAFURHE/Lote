ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32618").setExtent([383586.078534, 898495.113251, 383935.623701, 898677.514124]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Curvas_1m_1 = new ol.format.GeoJSON();
var features_Curvas_1m_1 = format_Curvas_1m_1.readFeatures(json_Curvas_1m_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32618'});
var jsonSource_Curvas_1m_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Curvas_1m_1.addFeatures(features_Curvas_1m_1);
var lyr_Curvas_1m_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Curvas_1m_1, 
                style: style_Curvas_1m_1,
                popuplayertitle: 'Curvas_1m',
                interactive: true,
                title: '<img src="styles/legend/Curvas_1m_1.png" /> Curvas_1m'
            });
var format_Bedoya_2 = new ol.format.GeoJSON();
var features_Bedoya_2 = format_Bedoya_2.readFeatures(json_Bedoya_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32618'});
var jsonSource_Bedoya_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bedoya_2.addFeatures(features_Bedoya_2);
var lyr_Bedoya_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bedoya_2, 
                style: style_Bedoya_2,
                popuplayertitle: 'Bedoya',
                interactive: true,
                title: '<img src="styles/legend/Bedoya_2.png" /> Bedoya'
            });
var format_Capadesalida_3 = new ol.format.GeoJSON();
var features_Capadesalida_3 = format_Capadesalida_3.readFeatures(json_Capadesalida_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32618'});
var jsonSource_Capadesalida_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capadesalida_3.addFeatures(features_Capadesalida_3);
var lyr_Capadesalida_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Capadesalida_3, 
                style: style_Capadesalida_3,
                popuplayertitle: 'Capa de salida',
                interactive: true,
                title: '<img src="styles/legend/Capadesalida_3.png" /> Capa de salida'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Curvas_1m_1.setVisible(true);lyr_Bedoya_2.setVisible(true);lyr_Capadesalida_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Curvas_1m_1,lyr_Bedoya_2,lyr_Capadesalida_3];
lyr_Curvas_1m_1.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_Bedoya_2.set('fieldAliases', {'id': 'id', 'Área': 'Área', });
lyr_Capadesalida_3.set('fieldAliases', {'label': 'label', 'distance': 'distance', 'units': 'units', 'heading_to': 'heading_to', 'total_distance': 'total_distance', });
lyr_Curvas_1m_1.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'ELEV': 'TextEdit', });
lyr_Bedoya_2.set('fieldImages', {'id': 'TextEdit', 'Área': 'TextEdit', });
lyr_Capadesalida_3.set('fieldImages', {'label': 'TextEdit', 'distance': 'TextEdit', 'units': 'TextEdit', 'heading_to': 'TextEdit', 'total_distance': 'TextEdit', });
lyr_Curvas_1m_1.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'ELEV': 'inline label - always visible', });
lyr_Bedoya_2.set('fieldLabels', {'id': 'hidden field', 'Área': 'inline label - always visible', });
lyr_Capadesalida_3.set('fieldLabels', {'label': 'hidden field', 'distance': 'inline label - always visible', 'units': 'hidden field', 'heading_to': 'hidden field', 'total_distance': 'hidden field', });
lyr_Capadesalida_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});