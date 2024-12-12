$(() => {
  const columnCount = 500;
  const rowCount = 50;
  $('#gridContainer').dxDataGrid({
    dataSource: employees,
    keyExpr: 'ID',
    allowColumnReordering: true,
    showBorders: true,
    rtlEnabled: true,
    height: 600,
    columnWidth: 100,
    width: '100%',
        scrolling: {
          mode: "virtual",
          rowRenderingMode: "virtual",
          columnRenderingMode: "virtual",
          showScrollbar: "always",
          scrollByContent: true,
          scrollByThumb: true,
         useNative: false // استخدام التمرير الأصلي
        },
    
  paging: {
    enabled: false,
   
  },
  columnFixing: {
    enabled: true
},
pager: {
  visible: true,
  allowedPageSizes: [5, 10, 'all'],
  showPageSizeSelector: true,
  showInfo: true,
  showNavigationButtons: true,
},
  
  columns: [
    {
        dataField: "Title",
        caption: "العنوان",
        width: 150
    },
    {
        dataField: "Position",
        caption: "الموقع",
        width: 150
    },
    {
        dataField: "State",
        caption: "الحالة",
        width: 150
    },
    {
        dataField: "State1",
        caption: "1 الحالة",
        width: 150
    },
    {
        dataField: "State2",
        caption: "2 الحالة",
        width: 150
    },
    {
        dataField: "State3",
        caption: "3 الحالة",
        width: 150
    },
    {
        dataField: "State4",
        caption: "4 الحالة",
        width: 150
    },
    {
        dataField: "State5",
        caption: "5 الحالة",
        width: 150
    },
    {
        dataField: "State6",
        caption: "6 الحالة",
        width: 150
    },
    {
        dataField: "State7",
        caption: "7 الحالة",
        width: 150
    }
],

    masterDetail: {
      enabled: true,
      template(container, options) {
        const currentEmployeeData = options.data;

        $('<div>')
          .addClass('master-detail-caption')
          .text(`${currentEmployeeData.FirstName} ${currentEmployeeData.LastName}'s Tasks:`)
          .appendTo(container);

        $('<div>')
          .dxDataGrid({
            columnAutoWidth: true,
            showBorders: true,
            columns: ['Subject', {
              dataField: 'StartDate',
              dataType: 'date',
            }, {
              dataField: 'DueDate',
              dataType: 'date',
            }, 'Priority', {
              caption: 'Completed',
              dataType: 'boolean',
              calculateCellValue(rowData) {
                return rowData.Status === 'Completed';
              },
            }],
            dataSource: new DevExpress.data.DataSource({
              store: new DevExpress.data.ArrayStore({
                key: 'ID',
                data: tasks,
              }),
              filter: ['EmployeeID', '=', options.key],
            }),
          }).appendTo(container);
      },
    },
  });
});