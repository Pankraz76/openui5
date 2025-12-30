sap.ui.define([
	"sap/ui/core/Lib",
	"sap/ui/thirdparty/jquery",
	"sap/f/DynamicPage",
	"sap/f/DynamicPageTitle",
	"sap/f/DynamicPageHeader",
	"sap/ui/layout/Grid",
	"sap/m/Table",
	"sap/m/Panel",
	"sap/m/MessageStrip",
	"sap/m/IconTabBar",
	"sap/m/IconTabFilter",
	"sap/m/Button",
	"sap/m/Title",
	"sap/m/Label",
	"sap/m/OverflowToolbar",
	"sap/m/ToolbarSpacer",
	"sap/m/Breadcrumbs",
	"sap/m/Link",
	"sap/m/GenericTag",
	"sap/ui/Device",
	"sap/ui/qunit/utils/nextUIUpdate"
],
	function(
		Library,
		$,
		DynamicPage,
		DynamicPageTitle,
		DynamicPageHeader,
		Grid,
		Table,
		Panel,
		MessageStrip,
		IconTabBar,
		IconTabFilter,
		Button,
		Title,
		Label,
		OverflowToolbar,
		ToolbarSpacer,
		Breadcrumbs,
		Link,
		GenericTag,
		Device,
		nextUIUpdate
	) {
	"use strict";

	var TESTS_DOM_CONTAINER = "qunit-fixture",
	oFactory = {
		getResourceBundle: () => Library.getResourceBundleFor("sap.f"),
		getDynamicPage: () => new DynamicPage({
            showFooter: true,
            title: this.getDynamicPageTitle(),
            header: this.getDynamicPageHeader(),
            content: this.getContent(100),
            footer: this.getFooter()
        }),
		getDynamicPageWithFitContentWithBigHeader: function () {
			var oBigHeaderContent = [ new Panel({ height: "900px"}) ];
			return new DynamicPage({
				showFooter: true,
				title: this.getDynamicPageTitle(),
				header: this.getDynamicPageHeader(oBigHeaderContent),
				content: this.getFitContent(),
				footer: this.getFooter()
			});
		},
		getDynamicPageWithHeaderPinned: () => new DynamicPage({
            title: this.getDynamicPageTitle(),
            header: this.getDynamicPageHeader(),
            headerPinned: true,
            content: this.getContent(100)
        }),
		getDynamicPageWithStickySubheader: function (bPreserveHeaderStateOnScroll, bHasHeader, bHasVisibleHeader, bHasTitle) {
			var oHeader = bHasHeader ? this.getDynamicPageHeader() : null,
				oContent = this.getIconTabBar();

			if (oHeader && !bHasVisibleHeader) {
				oHeader.setVisible(false);
			}

			return new DynamicPage({
				preserveHeaderStateOnScroll: bPreserveHeaderStateOnScroll,
				stickySubheaderProvider: oContent.getId(),
				title: bHasTitle ? this.getDynamicPageTitle() : null,
				header: oHeader,
				content: oContent
			});
		},
		getDynamicPageHeaderSnapped: () => new DynamicPage({
            headerExpanded: false,
            title: this.getDynamicPageTitle(),
            header: this.getDynamicPageHeader(),
            content: this.getContent(100)
        }),
		getDynamicPageHeaderSnappedNoContent: () => new DynamicPage({
            headerExpanded: false,
            title: this.getDynamicPageTitle(),
            header: this.getDynamicPageHeader()
        }),
		getDynamicPageWithBigContent: () => new DynamicPage({
            showFooter: true,
            title: this.getDynamicPageTitle(),
            header: this.getDynamicPageHeader(),
            content: this.getContent(300),
            footer: this.getFooter()
        }),
		getDynamicPageWithBigHeaderContent: function () {
			var oBigHeaderContent = [ new Panel({ height: "900px"}) ];
			return new DynamicPage({
				title: this.getDynamicPageTitle(),
				header: this.getDynamicPageHeader(oBigHeaderContent),
				content: this.getContent(900)
			});
		},
		getDynamicPageWithPreserveHeaderOnScroll: () => new DynamicPage({
            preserveHeaderStateOnScroll: true,
            title: this.getDynamicPageTitle(),
            header: this.getDynamicPageHeader(),
            content: this.getContent(100)
        }),
		getDynamicPageWithEmptyHeader: () => new DynamicPage({
            title: this.getDynamicPageTitle(),
            header: this.getDynamicPageHeader([]),
            content: this.getContent(100)
        }),
		getDynamicPageNoHeader: () => new DynamicPage({
            title: this.getDynamicPageTitle(),
            content: this.getContent(100)
        }),
		getDynamicPageNoTitle: () => new DynamicPage({
            header: this.getDynamicPageHeader(),
            content: this.getContent(100)
        }),
		getDynamicPageWithExpandSnapContent: () => new DynamicPage({
            title: this.getDynamicPageTitleWithExpandSnapContent(),
            header: this.getDynamicPageHeader(),
            content: this.getContent(200),
            footer: this.getFooter()
        }),
		getDynamicPageWithBreadCrumbs: () => new DynamicPage({
            title: this.getDynamicPageTitleWithBreadCrumbs(),
            header: this.getDynamicPageHeader(),
            content: this.getContent(200),
            footer: this.getFooter()
        }),
		getDynamicPageWithNavigationActions: () => new DynamicPage({
            title: this.getDynamicPageTitleWithNavigationActions(),
            header: this.getDynamicPageHeader(),
            content: this.getContent(200),
            footer: this.getFooter()
        }),
		getDynamicPageWithStandardAndNavigationActions: () => new DynamicPage({
            title: this.getDynamicPageTitleWithStandardAndNavigationActions(),
            header: this.getDynamicPageHeader(),
            content: this.getContent(200),
            footer: this.getFooter()
        }),
		getDynamicPageWithNavigationActionsAndBreadcrumbs: () => new DynamicPage({
            title: this.getDynamicPageTitleWithNavigationActionsAndBreadcrumbs(),
            header: this.getDynamicPageHeader(),
            content: this.getContent(200),
            footer: this.getFooter()
        }),
		getDynamicPageNoTitleAndHeader: () => new DynamicPage({
            content: this.getContent(20)
        }),
		getDynamicPageToggleHeaderFalse: () => new DynamicPage({
            toggleHeaderOnTitleClick: false,
            title: this.getDynamicPageTitle(),
            content: this.getContent(100)
        }),
		getDynamicPageTitle: () => new DynamicPageTitle({
            heading:  this.getTitle()
        }),
		getDynamicPageTitleWithBreadCrumbs: () => new DynamicPageTitle({
            heading: this.getTitle(),
            breadcrumbs: new Breadcrumbs({
                links: [
                    new Link({text: "link1"}),
                    new Link({text: "link2"}),
                    new Link({text: "link3"}),
                    new Link({text: "link4"})
                ]
            })
        }),
		getDynamicPageTitleWithStandardAndNavigationActions:  () => new DynamicPageTitle({
            heading:  this.getTitle(),
            actions: [
                this.getAction(),
                this.getAction()
            ],
            navigationActions: [
                this.getAction(),
                this.getAction(),
                this.getAction()
            ]
        }),
		getDynamicPageTitleWithNavigationActions:  () => new DynamicPageTitle({
            heading:  this.getTitle(),
            navigationActions: [
                this.getAction(),
                this.getAction(),
                this.getAction()
            ]
        }),
		getDynamicPageTitleWithNavigationActionsAndBreadcrumbs: () => new DynamicPageTitle({
            heading:  this.getTitle(),
            breadcrumbs: new Breadcrumbs({
                links: [
                    new Link({text: "link1"}),
                    new Link({text: "link2"}),
                    new Link({text: "link3"}),
                    new Link({text: "link4"})
                ]
            }),
            navigationActions: [
                this.getAction(),
                this.getAction(),
                this.getAction()
            ]
        }),
		getDynamicPageTitleWithExpandSnapContent: () => new DynamicPageTitle({
            heading: this.getTitle(),
            snappedContent: [
                this.getLabel("Snapped Content")
            ],
            expandedContent: [
                this.getLabel("Expanded Content")
            ],
            content: [this.getLabel("Content1"), this.getLabel("Content2")]
        }),
		getDynamicPageHeader: aContent => new DynamicPageHeader({
            pinnable: true,
            content: aContent || this.getContent(5)
        }),
		getFooter: () => new OverflowToolbar({
            content: [
                new ToolbarSpacer(),
                new Button({
                    text: "Accept",
                    type: "Accept"
                }),
                new Button({
                    text: "Reject",
                    type: "Reject"
                })
            ]
        }),
		getContent: iNumber => new Grid({
            defaultSpan: "XL2 L3 M4 S6",
            content: this.getMessageStrips(iNumber)
        }),
		getFitContent: () => new Table({}),
		getInvisibleContent: () => new OverflowToolbar({ content: new Button({
                text: "Invisible",
                visible: false
            })
        }),
		getIconTabBar: () => new IconTabBar("iconTabBar", {
            items: [
                this.getIconTabFilter("Info"),
                this.getIconTabFilter("Attachments"),
                this.getIconTabFilter("Notes"),
                this.getIconTabFilter("People")
            ]
        }),
		getIconTabFilter: sFilterName => new IconTabFilter({
            text: sFilterName,
            key: sFilterName,
            content: this.getContent(200)
        }),
		getMessageStrip: iNumber => new MessageStrip({
            text: "Content " + ++iNumber
        }),
		getMessageStrips: function (iNumber) {
			var aMessageStrips = [];

			for (var i = 0; i < iNumber; i++) {
				aMessageStrips.push(this.getMessageStrip(i));
			}
			return aMessageStrips;
		},
		getAction: () => new Button({
            text: "Action"
        }),
		getInvisibleAction: () => new Button({
            text: "Invisible",
            visible: false
        }),
		getLabel: sText => new Label({
            text: sText
        }),
		getTitle: () => new Title({
            text: "Anna Maria Luisa"
        }),
		getGenericTag: sText => new GenericTag({
            text: sText
        }),
		getOverflowToolbar: () => new OverflowToolbar({
            content: [
                this.getLabel("Label 1"),
                this.getLabel("Label 2")
            ]
        }),
		getEmptyOverflowToolbar: () => new OverflowToolbar()
	},
	oUtil = {
		renderObject: function (oObject) {
			oObject.placeAt(TESTS_DOM_CONTAINER);
			nextUIUpdate.runSync(); // TODO adapt callers
			return oObject;
		},
		exists: function (vObject) {
			if (arguments.length === 1) {
				return vObject && ("length" in vObject) ? vObject.length > 0 : !!vObject;
			}

			return Array.prototype.slice.call(arguments).every(oObject => this.exists(oObject));
		},
		toMobileMode: function () {
			$("html").removeClass("sapUiMedia-Std-Desktop-XL")
					.removeClass("sapUiMedia-Std-Desktop")
					.removeClass("sapUiMedia-Std-Tablet")
					.addClass("sapUiMedia-Std-Phone");
			Device.system.desktop = false;
			Device.system.tablet = false;
			Device.system.phone = true;
		},
		toTabletMode: function () {
			$("html").removeClass("sapUiMedia-Std-Desktop-XL")
					.removeClass("sapUiMedia-Std-Desktop")
					.removeClass("sapUiMedia-Std-Phone")
					.addClass("sapUiMedia-Std-Tablet");
			Device.system.desktop = false;
			Device.system.phone = false;
			Device.system.tablet = true;
		},
		toDesktopMode: function () {
			$("html").addClass("sapUiMedia-Std-Desktop")
					.removeClass("sapUiMedia-Std-Desktop-XL")
					.removeClass("sapUiMedia-Std-Tablet")
					.removeClass("sapUiMedia-Std-Phone");
			Device.system.desktop = true;
			Device.system.tablet = false;
			Device.system.phone = false;
		},
		toDesktopModeXL: function () {
			$("html").addClass("sapUiMedia-Std-Desktop-XL")
					.removeClass("sapUiMedia-Std-Desktop")
					.removeClass("sapUiMedia-Std-Tablet")
					.removeClass("sapUiMedia-Std-Phone");
			Device.system.desktop = true;
			Device.system.tablet = false;
			Device.system.phone = false;
		},
		testExpandedCollapsedARIA: function (assert, oDynamicPage, bShouldBeExpanded, sAriaLabelledBy, sMessage) {
			var	$oFocusSpan = oDynamicPage.getTitle()._getFocusSpan(),
					bAriaExpanded = $oFocusSpan.attr("aria-expanded"),
					sAriaLabelledById = $oFocusSpan.attr("aria-labelledby");

			assert.strictEqual(bAriaExpanded, bShouldBeExpanded, sMessage);
			assert.strictEqual(sAriaLabelledById, sAriaLabelledBy, sMessage);
		},
		getChildPosition: function(oElement, oContainer) {
			var oTopmostContainer = document.documentElement,
				oElementPosition = {
					top: oElement.offsetTop,
					left: oElement.offsetLeft},
				oOffsetParent = oElement.offsetParent;

			while ((oOffsetParent !== oContainer) && (oOffsetParent !== oTopmostContainer)) {
				oElementPosition.top += oOffsetParent.offsetTop;
				oElementPosition.left += oOffsetParent.offsetLeft;
				oOffsetParent = oOffsetParent.offsetParent;
			}

			return oElementPosition;
		}
	};

	return {
		sTestsDomContainer: TESTS_DOM_CONTAINER,
		oFactory : oFactory,
		oUtil : oUtil
	};
});